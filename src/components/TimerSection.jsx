import React from "react";
import Modal from "./Modal.jsx";
import { useRef, useState } from "react";

export default function TimerSection({ title, targetTimer }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTimer * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTimer * 1000;

  // 시간 초과 시 자동으로 타이머를 멈추고 모달을 띄움
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  function handleReset() {
    setTimeRemaining(targetTimer * 1000);
  }

  // 타이머를 시작하는 함수
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 100);
    }, 100);
  }

  // 누르면 타이머를 멈추는 함수
  function handleStop() {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  return (
    <>
      {<Modal ref={dialog} targetTimer={targetTimer} timeRemaining={timeRemaining} onReset={handleReset}/>}

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTimer} second{targetTimer > 1 && "s"}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"}
        </button>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Time is over!"}
        </p>
      </section>
    </>
  );
}

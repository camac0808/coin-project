import React, { forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ targetTimer, timeRemaining, onReset }, ref) {
  const score = Math.round((targetTimer - timeRemaining / 1000) * 100);

  let result;

  if (timeRemaining <= 0) {
    result = <h2>You Lost</h2>;
  } else {
    result = <h2>Your Score is {score}</h2>;
  }

  // 모달 컴포넌트를 document.body의 자식으로 이동시키기 위해 createPortal 사용
  return createPortal(
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      {result}
      <p>
        The target time was <strong>{targetTimer}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>{timeRemaining / 1000}</strong> seconds left.
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;

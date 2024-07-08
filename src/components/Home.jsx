import React from "react";
import Player from "./Player";
import TimerSection from "./TimerSection";
import Header from "./Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Player />
      <div id="challenges">
        <TimerSection title="easy" targetTimer={1} />
        <TimerSection title="normal" targetTimer={5} />
        <TimerSection title="hard" targetTimer={10} />
        <TimerSection title="pro" targetTimer={15} />
      </div>
    </main>
  );
}

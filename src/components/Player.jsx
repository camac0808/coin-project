import React from "react";

export default function Player() {
  const refName = React.useRef();
  const [playerName, setPlayerName] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayerName(refName.current.value);
    refName.current.value = "";
  };

  return (
    <section id="player">
      <h2>
        Welcome <em>{playerName ? playerName : "Unknown"}</em> Player
      </h2>
      <form onSubmit={handleSubmit}>
        <input ref={refName} type="text" />
        <button>Set Name</button>
      </form>
    </section>
  );
}

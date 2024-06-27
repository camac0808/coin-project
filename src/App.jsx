import { useEffect, useState } from 'react';
import Loading from "./components/Loading.jsx";
import Player from './components/Player.jsx';
import TimerSection from './components/TimerSection.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Player />
      <TimerSection title="easy" timer={1} />
      <TimerSection title="normal" timer={5} />
      <TimerSection title="hard" timer={10} />
      <TimerSection title="pro" timer={15} />
    </>
  );
}

export default App;

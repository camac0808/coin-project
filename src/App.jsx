import Loading from "./components/Loading.jsx";
import { Suspense, lazy } from 'react';

function App() {
  const Player = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/Player.jsx')), 2000);
    });
  });

  return (
    <Suspense fallback={<Loading />}>
      <Player />
      <div id="challenges"></div>
    </Suspense>
  );
}

export default App;

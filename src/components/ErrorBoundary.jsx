import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1 style={{ color: "red" }}>Error</h1>
      <p></p>
    </div>
  );
}

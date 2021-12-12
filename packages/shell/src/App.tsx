import { lazy, VFC } from "react";
import LoadAsync from "./components/LoadAsync";

const AuthApp = lazy(() => import("auth/App"));

const App: VFC = () => {
  return (
    <div>
      Hello World
      <LoadAsync>
        <AuthApp />
      </LoadAsync>
    </div>
  );
};

export default App;

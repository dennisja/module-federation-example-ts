import { Component, FC, lazy, Suspense, VFC } from "react";

// @ts-ignore
const AuthApp = lazy(() => import("auth/App"));

class ErrorBoundary extends Component<{}, { hasError: boolean }> {
  state = { hasError: false };

  componentDidCatch(error: any, errorInfo: any) {
    console.log({ error, errorInfo });
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something Went Wrong</h2>;
    }

    return this.props.children;
  }
}

const LoadAsync: FC = ({ children }) => (
  <ErrorBoundary>
    <Suspense fallback="loading....">{children}</Suspense>
  </ErrorBoundary>
);

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

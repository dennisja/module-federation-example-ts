import { Component } from "react";

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

export default ErrorBoundary;

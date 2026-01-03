import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex items-center justify-center text-red-600 font-bold">
          Something went wrong. Please refresh.
        </div>
      );
    }
    return this.props.children;
  }
}

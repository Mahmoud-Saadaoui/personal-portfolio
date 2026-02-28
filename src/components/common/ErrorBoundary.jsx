import { Component } from "react";
import { FaExclamationTriangle, FaRedo } from "react-icons/fa";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-4">
          <div className="max-w-md w-full bg-[var(--color-surface)] rounded-2xl p-8 shadow-2xl border border-[var(--color-text-muted)]/10 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
                <FaExclamationTriangle className="text-4xl text-red-500" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-[var(--color-text-main)] mb-2">
              Oops! Something went wrong
            </h1>

            <p className="text-[var(--color-text-muted)] mb-6">
              An unexpected error occurred. Don't worry, this is not your fault.
              Please try refreshing the page.
            </p>

            {this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                  Technical details
                </summary>
                <pre className="mt-3 p-4 bg-[var(--color-background)] rounded-lg text-xs text-red-400 overflow-auto max-h-40">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}

            <button
              onClick={this.handleReset}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-xl shadow-lg hover:shadow-[var(--color-primary)]/40 hover:scale-105 transition-all duration-300"
            >
              <FaRedo />
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

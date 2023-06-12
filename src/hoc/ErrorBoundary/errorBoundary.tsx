import { Component } from 'react';
import { IErrorBoundaryState } from './errorBoundary.types';

class ErrorBoundary extends Component<any, IErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error | null, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          <details>
            <summary>Expand</summary>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

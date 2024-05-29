import { Component, ReactNode } from "react";
import { Button, Card } from "react-bootstrap";

interface Props {
  fallback?: ReactNode | ((args: { error: Error; reset: any }) => ReactNode);
  children?: ReactNode;
  onReset?: () => void;
}

interface State {
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      error: undefined,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { error: error };
  }

  //   public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //     console.error("Uncaught error:", error, errorInfo);
  //   }

  resetHandle() {
    this.setState({ error: undefined });

    if (this.props?.onReset) {
      this.props?.onReset();
    }
  }

  render() {
    if (this.state.error) {
      if (this.props?.fallback) {
        if (typeof this.props?.fallback === "function") {
          return this.props?.fallback({
            error: this.state.error,
            reset: this.resetHandle,
          });
        }

        return this.props?.fallback;
      }

      return (
        <Card>
          <Card.Body>
            <h2>{this.state.error.message}</h2>
            <p>Bu sizinle ilgili bir sorun değil, yeniden deneyerek hatanın çözülmesini sağlayabilirsiniz.</p>

            <details className="mb-3">
              <summary>Hata detayı için tıklayın</summary>
              <pre>
                <code>{this.state.error.stack}</code>
              </pre>
            </details>

            <Button onClick={this.resetHandle}>Sıfırla</Button>
          </Card.Body>
        </Card>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
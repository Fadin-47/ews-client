import { Component, ErrorInfo, ReactNode } from 'react';
import ErrorScreen from './ui/error-screen';

interface IErrorInterceptorProps {
  componentName: string,
  children?: ReactNode,
}

interface State {
  hasError: boolean,
  stackErrors: string,

}

export class ErrorInterceptor extends Component<IErrorInterceptorProps, State> {
  public state: State = {
    hasError: false,
    stackErrors: '',
  };
  private componentName = this.props.componentName;

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true, stackErrors: '' };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      stackErrors: errorInfo.componentStack,
    })
  }


  public render() {
    if (this.state.hasError) {
      return <ErrorScreen stackErrors={this.state.stackErrors} componentName={this.componentName}/>;
    }

    return this.props.children;
  }
}

export default ErrorInterceptor;

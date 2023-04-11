import { render } from '@testing-library/react';

import ErrorInterceptor from './error-interceptor';

describe('ErrorInterceptor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorInterceptor componentName='App' />);
    expect(baseElement).toBeTruthy();
  });
});

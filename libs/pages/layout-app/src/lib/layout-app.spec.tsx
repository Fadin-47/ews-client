import { render } from '@testing-library/react';

import LayoutApp from './layout-app';

describe('LayoutApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutApp />);
    expect(baseElement).toBeTruthy();
  });
});

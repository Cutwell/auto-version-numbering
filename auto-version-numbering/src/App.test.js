import { render, screen } from '@testing-library/react';
import App from './App';

test('renders release text', () => {
	render(<App />);
	const ele = screen.getByText(/Release/i);
	expect(ele).toBeInTheDocument();
});

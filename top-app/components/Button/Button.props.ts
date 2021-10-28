import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary' | 'ghost';
	children: ReactNode;
	arrow?: 'down' | 'right' | 'none';
}

export default Props;

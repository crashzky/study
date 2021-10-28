import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{
	color?: 'green' | 'red' | 'ghost' | 'primary-ghost';
	href?: string;
	children: ReactNode;
}

export default Props;

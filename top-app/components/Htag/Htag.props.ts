import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	tag: 'h1' | 'h2' | 'h3';
	children: ReactNode;
};

export default Props;

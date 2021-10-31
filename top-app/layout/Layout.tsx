import Props from './Layout.props';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { FunctionComponent } from 'react';

export const Layout = ({ children }: Props): JSX.Element => {
	return (
		<>
			<Sidebar />
			<div>
				<Header />
				<div>
					{children}
				</div>
				<Footer />
			</div>
		</>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>): FunctionComponent<T> => {
	const newComponent = (props: T): JSX.Element => {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};

	return newComponent;
};

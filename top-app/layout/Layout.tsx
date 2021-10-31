import Props from './Layout.props';
import styles from './Layout.module.scss';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { FunctionComponent } from 'react';

export const Layout = ({ children }: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			<Sidebar className={styles.sidebar} />
			<Header className={styles.header} />
			<div>
				<div className={styles.body}>
					{children}
				</div>
			</div>
			<Footer className={styles.footer} />
		</div>
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

import Props from './Layout.props';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }: Props): JSX.Element => {
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

export default Layout;

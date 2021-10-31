import Props from './Header.props';

const Header = ({ ...props }: Props): JSX.Element => {
	return (
		<div {...props}>
			Header
		</div>
	);
};

export default Header;

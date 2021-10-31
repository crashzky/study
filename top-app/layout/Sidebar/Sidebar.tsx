import Props from './Sidebar.props';

const Sidebar = ({ ...props }: Props): JSX.Element => {
	return (
		<div {...props}>
			Sidebar
		</div>
	);
};

export default Sidebar;

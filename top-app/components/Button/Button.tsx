import styles from './Button.module.scss';
import Props from './Button.props';
import cn from 'classnames';

export const Button = ({ children, appearance }: Props): JSX.Element => {
	return (
		<button className={cn(styles.button, {
			[styles.primary]: appearance === 'primary',
			[styles.ghost]: appearance === 'ghost',
		})}
		>
			{children}
		</button>
	);
};

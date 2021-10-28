import Props from './Tag.props';
import styles from './Tag.module.scss';
import cn from 'classnames';

export const Tag = ({ children, color, size, className, ...props }: Props): JSX.Element => {
	return (
		<span
			className={cn(
				styles.span,
				className,
				{
					[styles.green]: color === 'green',
					[styles.red]: color === 'red',
					[styles.ghost]: color === 'ghost',
					[styles.primary_ghost]: color === 'primary-ghost',
					[styles.big]: size === 'big',
					[styles.medium]: size === 'medium',
				}
			)}
			{...props}
		>
			{children}
		</span>
	);
};

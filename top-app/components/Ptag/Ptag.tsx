import Props from './Ptag.props';
import cn from 'classnames';
import styles from './Ptag.module.scss';

export const Ptag = ({ size = 'medium', children, className, ...props }: Props): JSX.Element => {
	return (
		<p
			className={cn(
				styles.p,
				className,
				{
					[styles.big]: size === 'big',
					[styles.medium]: size === 'medium',
					[styles.small]: size === 'small',
				}
			)}
			{...props}
		>
			{children}
		</p>	
	);
};

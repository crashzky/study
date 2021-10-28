import Props from './Tag.props';
import styles from './Tag.module.scss';
import cn from 'classnames';

export const Tag = ({ children, color, href, className, ...props }: Props): JSX.Element => {
	return (
		<span
			className={cn(
				styles.span,
				className,
				{
					[styles.green]: color === 'green',
					[styles.red]: color === 'red',
					[styles.ghost]: color === 'ghost',
					[styles['primary-ghost']]: color === 'primary-ghost',
				}
			)}
			{...props}
		>
			{
				href ? (
					<a href={href}>
						{children}
					</a>
				) : (
					<p className={styles.p}>
						{children}
					</p>
				)
			}
		</span>
	);
};

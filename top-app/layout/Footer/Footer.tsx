import Props from './Footer.props';
import styles from './Footer.module.scss';
import cn from 'classnames';

const Footer = ({ className, ...props }: Props): JSX.Element => {
	return (
		<footer
			className={cn(
				styles.container,
				className
			)}
			{...props}
		>
			<p className={styles.p}>
				OwlTop © 2020 -
				{' ' + new Date(Date.now()).getFullYear() + ' '}
				Все права защищены
			</p>
			<a 
				className={cn(
					styles.p,
					styles['p-hover']
				)}
				href='#'
				target='_blank'
			>
				Пользовательское соглашение
			</a>
			<a
				className={cn(
					styles.p,
					styles['p-hover']
				)}
				href='#'
				target='_blank'
			>
				Политика конфиденциальности
			</a>
		</footer>
	);
};

export default Footer;

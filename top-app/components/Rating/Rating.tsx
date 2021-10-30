import Props from './Rating.props';
import styles from './Rating.module.scss';
import StarIcon from './star.svg';
import cn from 'classnames';
import { useState } from 'react';

export const Rating = ({ activedStars = [0, 0, 0, 0, 0], setActivedStar, ...props }: Props): JSX.Element => {
	const [hoveredStars, setHoveredStars] = useState<number>(-1);

	return (
		<div
			onMouseLeave={() => setHoveredStars(-1)}
			{...props}
		>
			{activedStars.map((i: number, num: number): JSX.Element => (
				<button
					key={num}
					className={styles.button}
					onClick={() => setActivedStar(num)}
					onMouseEnter={() => setHoveredStars((num))}
					onMouseLeave={() => setHoveredStars(num - 1)}
				>
					<StarIcon
						tabIndex={0}
						className={cn(
							{
								[styles.active]: (i === 1 && hoveredStars === -1) || (hoveredStars !== -1 && num <= hoveredStars),
							}
						)} />
				</button>
			))}
		</div>
	);
};

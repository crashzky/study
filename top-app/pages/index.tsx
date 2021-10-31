import { useState } from 'react';
import { Button, Htag, Ptag, Tag, Rating } from '../components';
import Layout from '../layout/Layout';

const Home = (): JSX.Element => {
	const [count, setCount] = useState(0);
	const [rating, setRating] = useState([0, 0, 0, 0, 0]);

	const setActiveStar = (newValue: number) => {
		let _newValue = [];

		for(let i = 0; i < 5; i++) {
			if(i <= newValue)
				_newValue.push(1);
			else
				_newValue.push(0);
		}
		
		setRating(_newValue);
	};

	return (
		<Layout>
			<Htag tag='h2'>
				{count}
			</Htag>
			<Htag tag='h1'>
				Курсы по Photoshop
			</Htag>
			<Button arrow='down' appearance='primary'>
				Узнать подробнее
			</Button>
			<Button arrow='down' appearance='ghost'>
				Читать отзывы
			</Button>
			<Button appearance='primary' onClick={() => setCount((count) => count + 1)}>
				Увеличить
			</Button>
			<Ptag size='medium'>
				Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки,
				которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами.
				Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
			</Ptag>
			<Tag color='green'>
				-10 000 ₽ 
			</Tag>
			<Tag color='primary-ghost' href='/404'>
				Работа в Photoshop
			</Tag>
			<Rating
				activedStars={rating}
				setActivedStar={setActiveStar} />
		</Layout>
	);
};

export default Home;

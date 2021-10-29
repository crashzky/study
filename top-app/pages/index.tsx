import { useEffect, useState } from 'react';
import { Button, Htag, Ptag, Tag } from '../components';

const Home = () => {
	const [count, setCount] = useState(0);
	
	useEffect(() => {
		console.log('mount');
		return function() {
			console.log('unmount');
		};
	});

	return (
		<>
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
		</>
	);
};

export default Home;

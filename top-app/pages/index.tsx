import { Button, Htag, Ptag, Tag } from '../components';

const Home = () => {
	return (
		<>
			<Htag tag='h1'>
				Курсы по Photoshop
			</Htag>
			<Button arrow='down' appearance='primary'>
				Узнать подробнее
			</Button>
			<Button arrow='down' appearance='ghost'>
				Читать отзывы
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
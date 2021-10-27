import { Button, Htag } from '../components';

const Home = () => {
	return (
		<>
			<Htag tag='h1'>
				Курсы по Photoshop
			</Htag>
			<Button appearance='primary'>
				Узнать подробнее
			</Button>
			<Button appearance='ghost'>
				Читать отзывы
			</Button>
		</>
	);
};

export default Home;

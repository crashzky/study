import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: Props) {
	return (
		<div>
			<Head>
				<title>
					Top app
				</title>
			</Head>
			<Component {...pageProps} />
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link
				href={`
					https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@200;300;400;500;600;700&display=swap
				`}
				rel='stylesheet' />
		</div>
	);
}

interface Props {
	Component: any;
	pageProps: object;
}

export default MyApp;

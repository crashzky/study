import '../styles/globals.css'

function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />
}

interface Props {
	Component: any;
	pageProps: object;
}

export default MyApp

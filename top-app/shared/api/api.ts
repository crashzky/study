import axios from 'axios';
import ValueResponse from '../types/value.type';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_URL;

function getValues(firstCategory: number): Promise<ValueResponse[]> {
	return axios.post('/top-page/find', {
		firstCategory,
	}).then((res) => res.data);
}

export {
	getValues,
};

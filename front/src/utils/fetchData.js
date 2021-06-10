import { BASE_URL } from '../constants';

const fetchData = async (endpoint, abortController) => {
	try {
		const rawResponse = await fetch(`${BASE_URL}${endpoint}`, {
			signal: abortController.signal,
		});
		const response = await rawResponse.json();
		return response;
	} catch (error) {
		console.log(error);
	}
};

export default fetchData;

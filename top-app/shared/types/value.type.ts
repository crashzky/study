interface Page {
	alias: string;
	title: string;
	_id: string;
	category: string;
};

interface ValueResponse {
	_id: {
		secondCategory: string;
	};
	pages: Page[];
}

export default ValueResponse;

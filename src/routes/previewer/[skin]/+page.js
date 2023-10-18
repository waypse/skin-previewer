/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { skin } = params;
	return {
		skin
	};
}

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	return `Test POST handler ${JSON.stringify(body)}`;
});

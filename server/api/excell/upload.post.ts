import { defineEventHandler, readMultipartFormData } from 'h3';
import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
	const files = await readMultipartFormData(event);
	const uploadDir = path.join(process.cwd(), 'uploads');

	await fs.mkdir(uploadDir, { recursive: true });

	for (const file of files!) {
		const fileName = file.filename!.split('/').at(-1)!;
		const filePath = path.join(uploadDir, fileName);
		await fs.writeFile(filePath, file.data);
	}

	return;
});

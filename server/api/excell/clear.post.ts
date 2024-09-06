import { defineEventHandler } from 'h3';
import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
	const uploadDir = path.join(process.cwd(), 'uploads');

	const files = await fs.readdir(uploadDir);

	for (const file of files) {
		await fs.unlink(path.join(uploadDir, file));
	}

	return;
});

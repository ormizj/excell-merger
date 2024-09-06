import { defineEventHandler } from 'h3';
import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
	const uploadDir = path.join(process.cwd(), 'uploads');

	await fs.rm(uploadDir, { recursive: true, force: true });
	await fs.mkdir(uploadDir, { recursive: true });

	return 'Files cleared successfully';
});

import ExcelJS from 'exceljs';

export default defineEventHandler(async (event) => {
	setHeader(event, 'Content-Type', 'application/vnd.ms-excel');
	setHeader(event, 'Content-Disposition', 'attachment; filename=Excell.xlsx');

	const workbook = new ExcelJS.Workbook();
	const worksheet = workbook.addWorksheet('Excell');
	worksheet.columns = [
		{ header: 'Id', key: 'id', width: 10 },
		{ header: 'Name', key: 'name', width: 10 },
		{ header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 },
	];

	worksheet.insertRow(1, {
		id: 1,
		name: 'John Doe',
		dob: new Date(1970, 1, 1),
	});
	worksheet.insertRow(1, {
		id: 2,
		name: 'Jane Doe',
		dob: new Date(1965, 1, 7),
	});

	return await workbook.xlsx.writeBuffer();
});

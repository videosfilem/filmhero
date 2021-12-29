const fs = require('fs');

function createDB() {
	const files = fs.readdirSync('./db/')
	const db = [];

	for(const file of files) {
		const fileData = fs.readFileSync(`./db/${file}`, 'utf8');
		db.push(JSON.parse(fileData));
	}

	fs.writeFile('./public/database/database.json', JSON.stringify(db), function(error) {
		error ? console.log(error) : console.log('Database was created!');
	});
}

createDB();

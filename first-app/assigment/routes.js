const reqHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Add User</title></head>');
		res.write(
			'<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Add</button></form></body>'
		);
		res.write('</html>');
		return res.end();
	}

	if (url === '/users') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Home</title></head>');
		res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
		res.write('</html>');
		return res.end();
	}

	if (url === '/create-user' && method === 'POST') {
		const body = [];
		req.on('data', (chunk) => body.push(chunk));
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const username = parsedBody.split('=')[1];
			console.log({ username });
			res.statusCode = 302;
			res.setHeader('Location', '/users');
			return res.end();
		});
	}
};

module.exports = reqHandler;

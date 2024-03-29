const express = require('express');
const axios = require('axios');
const app = express();

// Create template for responses/images
// rect_width = 10 (for 1 character) + 5 per extra character
// svg_width = rect_width + 2
const templateSVG = `
<svg viewBox="0 0 {{svg_width}} 12" xmlns="http://www.w3.org/2000/svg">
  <style>
    .small {
      font: 8px monospace;
	  fill: #{{color}};
    }
  </style>

  <rect x="1" y="1" rx="4" ry="4" width="{{rect_width}}" height="10" stroke="#{{color}}" fill="none"/>

  <text x="4" y="9" class="small">{{tag_name}}</text>
</svg>
`;


app.get('/preview/:user/:projectName', async (req, res) => {
	try {
		// collect own IP and port for internal request
		const serverIp = server.address().address;
		const serverPort = server.address().port;

		// collect target username and repository from URL (required) and parameters (optional, named)
		const user = req.params.user;
		const projectName = req.params.projectName;
		const { color = 'd5008f' } = req.query;

		// Make an internal request to another route
		const route = `http://${serverIp}:${serverPort}/api/${user}/${projectName}?color=${color}`

		const templateHTML = `
		<html>
		  <head>
			<title>Automatic Version Numbering</title>
		  </head>
		  <body>
		  	<img src="${route}">
		  </body>
		</html>
		`;

		// Return the HTML response to the user
		res.send(templateHTML);

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.get('/api/:user/:projectName', async (req, res) => {
	try {
		// collect target username and repository from URL
		const user = req.params.user;
		const projectName = req.params.projectName;
		const { color = 'd5008f' } = req.query;

		var latest;
		try {
			// Make a request to an external API
			const response = await axios.get(`https://api.github.com/repos/${user}/${projectName}/releases`);
			const releases = response.data;
			if (releases.length > 0) {
				latest = releases[0];
			} else {
				latest = {
					tag_name: "v0"
				}
			}
		} catch (error) {
			if (error.response && error.response.status === 404) {
				// Handle 404 error
				latest = {
					tag_name: "Not Found"
				}
			} else {
				// Handle other errors
				console.error(error);
			}
		}

		const tag_name = latest.tag_name ?? "v0"
		const rect_width = 10 + ((tag_name.length - 1) * 5);
		const svg_width = rect_width + 2;

		// format info into SVG
		const formattedSVG = templateSVG.replace('{{tag_name}}', tag_name).replace('{{svg_width}}', svg_width).replace('{{rect_width}}', rect_width).replace(/{{color}}/g, color);

		// Set the response content type to SVG
		res.set('Content-Type', 'image/svg+xml');

		// Send the image buffer as the response
		res.send(formattedSVG);
	} catch (error) {
		console.error(error);
		res.status(500).send();
	}
});

const port = process.env.PORT || 3000;

// Start the server
const server = app.listen(port, 'localhost', () => {
	const serverIp = server.address().address;
	const serverPort = server.address().port;
	console.log(`Server is running at http://${serverIp}:${serverPort}`);
});
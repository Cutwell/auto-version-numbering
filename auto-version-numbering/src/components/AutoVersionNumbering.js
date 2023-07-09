import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AutoVersionNumbering({ user, projectName }) {
	const [textContent, setTextContent] = useState('');

	useEffect(() => {
		const fetchReleases = async () => {
			try {
				const response = await axios.get(`https://api.github.com/repos/${user}/${projectName}/releases`);
				setTextContent("Release " + response.data['length']);
			} catch (error) {
				console.error('Error fetching GitHub releases:', error);
			}
		};

		fetchReleases();
	}, [user, projectName]);

	return (
		<div>
			<code>{textContent}</code>
		</div>
	);
}

export default AutoVersionNumbering;

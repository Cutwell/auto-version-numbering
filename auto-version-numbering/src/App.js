import AutoVersionNumbering from './components/AutoVersionNumbering';
import banner from './banner.png';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={banner} className="App-logo" alt="banner" />
				<a
					className="App-link"
					href="https://github.com/Cutwell/auto-version-numbering"
					target="_blank"
					rel="noopener noreferrer"
				>
					View on GitHub
				</a>
				<AutoVersionNumbering user="Cutwell" projectName="auto-version-numbering" />
			</header>
		</div>
	);
}

export default App;

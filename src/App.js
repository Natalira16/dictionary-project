import logo from "./dictionary-logo.png"
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            <div className="footer">
              <nav class="navbar navbar-expand-lg footer justify-content-center text-center">
                <p class="m-0 p-3">
                  This poject was coded by Nataliia Medvedenko. <a href="https://github.com/Natalira16/dictionary-project" target="_blank" rel="noreferrer">Open-sourced on GitHub</a> and <a href="https://project-dictionary-app.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>.
                </p>
              </nav>
            </div>
          </small>
        </footer>
      </div>
    </div>
  );
}

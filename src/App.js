import "./App.css";

import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="Sunset" />
        </main>
        <footer className="App-footer">
          Coded by <strong> Pilar Dominguez</strong>🐒 and is{" "}
          <a
            href="https://github.com/Pildomfl/dictionary-project"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://jolly-medovik-e04fea.netlify.app/" rel="noreferrer">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

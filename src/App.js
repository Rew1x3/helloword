import React from 'react';
import './App.css';
import bgVideo from './assets/video/planet.webm';

function App() {
  return (
    <div className="App">
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay" />
      <div className="content">
        <h1>Hello Word!</h1>

        <p className="en">
          Hello! I'm a programmer who understands both Russian and English languages.<br />
          I develop modern web applications and software projects. Feel free to reach out to me through GitHub or Telegram.
        </p>

        <p className="ru">
          Привет! Я программист, который понимает как русский, так и английский язык.<br />
          Разрабатываю современные веб‑приложения и программные проекты. Связаться со мной можно через GitHub или Telegram.
        </p>

        <div className="links">
          {/* TODO: Replace '#' with your GitHub profile URL (e.g., https://github.com/yourusername) */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" className="icon" /> GitHub
          </a>

          {/* TODO: Replace '#' with your Telegram profile URL (e.g., https://t.me/yourusername) */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/icons/telegram.svg" alt="Telegram" className="icon" /> Telegram
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.scss";

import { AboutCard } from './components/Card/Card';
import Icon from './components/Icon/Icon';

function App() {
  return (<>
    <header>

      <img className="profile" src="/assets/images/Profile.svg" alt="profile" />
      <AboutCard />
      <div className="figure rectangle" />
      <div className="figure circle" />
      <img id="grid1" className="figure dot-grid" src="/assets/images/dot-grid.svg" alt="" />
      <img id="grid2" className="figure dot-grid" src="/assets/images/dot-grid.svg" alt="" />

    </header>
    <footer id="contact">
      <div className="main-content">
        <h2>Contact</h2>
        <div class="grid">
          <a href="https://github.com/sonya-c/" target="_blank" rel="noreferrer">
            <Icon iconName="github" iconExtension="svg" />
          </a>
          <a href="https://www.linkedin.com/in/sonya-castro/" target="_blank" rel="noreferrer">
            <Icon iconName="linkedin" iconExtension="svg" />
          </a>
          <a href="mailto:sonya.castro.gomez@gmail.com" target="_blank" rel="noreferrer">
            <Icon iconName="mail" iconExtension="svg" />
          </a>
        </div>

      </div>
      <p className="copyright">© Developed and designed by Sonya Castro 2023</p>
      <div className="figure triangle" />
      <div className="figure circle" />
    </footer>
  </>);
}

export default App;

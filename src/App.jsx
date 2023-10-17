import "./App.scss";

import { AboutCard } from './components/Card/Card';

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
  </>);
}

export default App;

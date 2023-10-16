import "./App.scss";
import Icon from "./components/Icon/Icon";
import Profile
  from "./components/Profile/Profile";
import Button from './components/Button/Button';

function App() {
  return (<>
    <Icon
      iconName="python"
      iconExtension="png"
      iconFolder="/assets/icons/" />
    <Profile />
    <Button
      content={"Say 'Hello!'"}
      onClick={() => console.log("Hello!")} />
  </>);
}

export default App;

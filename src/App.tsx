import "./App.scss";
import Feed from "./Components/Feed";
import RightSidebar from "./Components/RightSidebar";
import Sidebar from "./Components/Sidebar";
import StoryIcons from "./Components/StoryIcons";

const App = () => {
  return (
    <>
      <Sidebar />
      <StoryIcons />
      <div className="container">
      <div className="home-layout">
        <Feed />
        <RightSidebar />
      </div>
    </div>
    </>
  );
};

export default App;

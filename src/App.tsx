import "./App.scss";
import BottomNavbar from "./Components/BottomNavbar";
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
      <BottomNavbar />
    </>
  );
};

export default App;

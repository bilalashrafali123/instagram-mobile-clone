import "./App.scss"
import Feed from "./Components/Feed"
import Sidebar from "./Components/Sidebar"
import StoryIcons from "./Components/StoryIcons"


const App = () => {
  return (
    <>
    <Sidebar />
    <StoryIcons />
    <Feed />
    </>
  )
}

export default App
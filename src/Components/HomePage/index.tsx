import Feed from "../Feed"
import RightSidebar from "../RightSidebar"
import "./index.scss"

const HomePage = () => {
  return (
      <div className="container">
      <div className="home-layout">
        <Feed />
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage;
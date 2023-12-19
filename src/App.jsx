import Content from "./components/Content/Content";
import SideBar from "./components/SideBar/SideBar";

import "./App.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="side-bar-container">
          <SideBar />
        </div>

        <div className="content-container">
          <div className="content-main">
            <Content />
          </div>

          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

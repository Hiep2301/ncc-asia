import "./SideBar.scss";

function SideBar() {
  return (
    <>
      <ul className="side-bar-list-items">
        <li className="side-bar-item side-bar-item-active">Home</li>
        <li className="side-bar-item">Services</li>
        <li className="side-bar-item">News</li>
        <li className="side-bar-item">Blog</li>
        <li className="side-bar-item">Contact</li>
      </ul>
    </>
  );
}

export default SideBar;

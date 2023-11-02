import "./Header.css";
import Nav from "./Nav";
import headingimg from "./heading-img.jpg";
function Header() {
  return (
    <div className="container-fluid">
      <Nav />
      <div className="col">
        <img className="img-fluid" src={headingimg} alt="" />
      </div>
    </div>
  );
}

export default Header;

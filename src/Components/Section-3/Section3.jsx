import "./Section3.css";
import getintouch from "./getintouchimg.jpg";
function Section3() {
  return (
    <div className="container-fluid">
      <div className="col">
        <div className="row text-center">
          <h1 className="headi">GET IN TOUCH TODAY</h1>
        </div>
        <img className="img-fluid" src={getintouch} alt="" />
      </div>
    </div>
  );
}
export default Section3;

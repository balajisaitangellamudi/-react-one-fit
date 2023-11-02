import "./Cards.css";
import fit1 from "../../Assets/fit1.avif";
import fit2 from "../../Assets/fit2.avif";
import fit3 from "../../Assets/fit3.avif";
import fit4 from "../../Assets/fit4.webp";
import fit5 from "../../Assets/fit5.avif";
import fit6 from "../../Assets/fit6.avif";

function Cards() {
  return (
    <div className="container-fluid">
      <div className="col">
        <div className="row text-center">
          <h1 className="service-heading">WHAT WE OFFER</h1>
          <p>We're committed to bringing you the best workout experience.</p>
        </div>
        <div className="container-fluid">
          <div className="col">
            <div className="row">
              <div className=" col-xl-4 col-lg-4 mt-5 col-md-6 col-12  ">
                <img className="img-fluid rounded-4" src={fit1} alt=" " />
              </div>
              <div className=" col-xl-4 col-lg-4 col-md-6 col-12 mt-5  ">
                <img className="img-fluid rounded-4" src={fit2} alt=" " />
              </div>
              <div className=" col-xl-4  col-lg-4 col-md-6 mt-5 col-12 mt-5  ">
                <img className="img-fluid rounded-4" src={fit3} alt=" " />
              </div>{" "}
              <div className="col-xl-4  col-lg-4 mt-5 col-md-6 mt-5 col-12 mt-5  ">
                <img className="img-fluid rounded-4" src={fit4} alt=" " />
              </div>{" "}
              <div className=" col-xl-4  col-lg-4 mt-5 col-md-6  mt-5 col-12 mt-5  ">
                <img className="img-fluid rounded-4" src={fit5} alt=" " />
              </div>{" "}
              <div className=" col-xl-4 col-lg-4 mt-5 col-md-6 mt-5 col-12 mt-5  ">
                <img className="img-fluid rounded-4" src={fit6} alt=" " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;

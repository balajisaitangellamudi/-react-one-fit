import "./ContactUs.css";

function ConatctUs() {
  const phone = "(+91) 8143606368";
  return (
    <div className="container-fluid bg-color">
      <div className="row text-center ">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          {" "}
          <h5>MAILING ADDRESS</h5>
          <p>123 Anywhere St., Any City, ST 12345</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <h5>EMAIL ADDRESS</h5>
          <p>hello@reallygreatsite.com</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <h5>PHONE NUMBER</h5>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
}
export default ConatctUs;

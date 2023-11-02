import Header from "../Components/Header/Header";
import Section2 from "../Components/Section-2/Section2";
import Cards from "../Components/Cards/Cards";
import Section3 from "../Components/Section-3/Section3";
import ConatctUs from "../Components/ContactUs/ContactUs";
function Layout() {
  return (
    <div className="container-fluid">
      <Header />
      <Section2 />
      <Cards />
      <Section3 />
      <ConatctUs />
    </div>
  );
}
export default Layout;

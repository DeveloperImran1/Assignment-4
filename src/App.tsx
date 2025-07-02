import { Outlet } from "react-router";
import Footer from "./components/module/homePage/Footer";
import Navbar from "./components/module/homePage/Navbar";
import CommonLayout from "./components/module/layouts/CommonLayout";

function App() {
  return (
    <>
      <section className="">
        <CommonLayout>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </CommonLayout>

        <Footer></Footer>
      </section>
    </>
  );
}

export default App;

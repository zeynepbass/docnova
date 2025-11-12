import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function LayoutWrapper() {
  return (
 <div style={{  backgroundColor: "#f0f5ff", minHeight: "100vh" }}>
      <Header />
     <Outlet/>
      <Footer />
      </div>
  );
}

import Home from "./home_subpages/home.js";
import Data from "./home_subpages/data.js";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

export default function Main() {
  return (
    <main className="absolute inset-0">
      <div id="navbar">
        <Navbar />
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="data">
        <Data />
      </div>
      <div id="footer">      
        <Footer />
      </div>
    </main>
  );
}

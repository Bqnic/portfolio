import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Introduction></Introduction>
      <Navigation></Navigation>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

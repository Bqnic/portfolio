import About from "./About";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Footer from "./Footer";
import { imageArray } from "./assets/projects-helper";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [loadingState, setLoadingState] = useState(true);
  useEffect(() => {
    //preloading image
    imageArray.forEach((face) => {
      const img = new Image();
      img.src = face;
    });
    setLoadingState(false);
  }, []);

  if (!loadingState) {
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
  } else {
    return <p></p>;
  }
}

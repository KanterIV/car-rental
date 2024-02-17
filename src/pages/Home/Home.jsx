import { useEffect } from "react";
import AboutRental from "../../components/AboutRental/AboutRental";

const Home = () => {
  useEffect(() => {
    const main = document.getElementsByTagName("main");
    main[0].classList.add("background-visible");
    document.body.style.overflowY = "hidden";

    return () => {
      main[0].classList.remove("background-visible");
      document.body.style.overflowY = "visible";
    };
  }, []);

  return <AboutRental />;
};

export default Home;

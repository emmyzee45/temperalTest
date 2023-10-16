import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar"
import "./home.css";

const Intro = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="hometop">
        <img src="https://firebasestorage.googleapis.com/v0/b/cardano-d265c.appspot.com/o/bg-3.jpg?alt=media&token=3ccacd72-ce76-458d-b779-a2dd86111c0d" className="homeimg"/>
        <div className="hometext">Verifications</div>
      </div>
      {/* <div className="botton">Botton</div> */}
      <Footer />
    </div>
  );
};

export default Intro;

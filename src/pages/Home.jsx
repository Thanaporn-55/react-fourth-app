import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NavBarMain from "./../components/NavBarMain";
import hero from "./../assets/hero.png";

export default function Home() {
    return (
        <>
            <NavBarMain />
            <Header />
            {/* <h2 style="text-align: center ; color=red">Home Page</h2> */}
            <h2 style={{ textAlign: "center", color: "#ffd9fd" }}>Home Page</h2>
            <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem laboriosam, sint magnam minus maiores ipsum reprehenderit tempore? Sunt veritatis esse odit, reprehenderit cumque architecto eius maxime qui eos at quibusdam!
            </p>
            {/* การแสดงรูปจาก public */}
            <img src="super.png" alt="super" style={{ width: "100px" }} />
            
            {/* การแสดงรูปจาก asset */}
            <img src={hero} alt="hero" style={{ width: "200px" }} />
            <Footer />
        </>
    )
}

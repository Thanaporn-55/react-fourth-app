import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NavBarMain from "./../components/NavBarMain";

export default function About() {
    return (
        <>
            <NavBarMain />
            <Header />
            <h2 style={{ textAlign: "center", color: "#ffd9fd" }}>About Page</h2>
            <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam quis molestias non delectus praesentium? Ipsam, doloremque expedita? Sint ipsum eum atque sed non dolor ex iste qui quos? Quidem.
            </p>
            <Footer />
        </>
    )
}

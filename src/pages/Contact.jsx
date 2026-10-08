import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NavBarMain from "./../components/NavBarMain";

export default function Contact() {
    return (
        <>
            <NavBarMain />
            <Header />
            <h2 style={{ textAlign: "center", color: "#ffd9fd" }}>Contact Page</h2>
            <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores assumenda exercitationem veritatis temporibus neque alias cumque eius reiciendis optio facilis?
            </p>
            <Footer />
        </>
    )
}

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NavBarMain from "./../components/NavBarMain";
import Productlink from "./../components/Productlink";

export default function Product() {
    return (
        <>
            <NavBarMain />
            <Header />
            <h2 style={{ textAlign: "center", color: "#ffd9fd" }}>Product Page</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <Productlink url="/product/computer" title="COMPUTER" bgcolor="#ff02ff"/>
                <Productlink url="/product/smartphone" title="SMARTPHONE" bgcolor="#ff02c8"/>
            </div>
            <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quas error beatae delectus nam corrupti deserunt minus sapiente fugiat velit. Suscipit, consequatur dolor quisquam placeat alias neque quae? Quam, sint.
            </p>
            <Footer />
        </>
    )
}

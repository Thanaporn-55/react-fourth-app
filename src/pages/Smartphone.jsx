import ProductHeader from "./../components/ProductHeader";
import Footer from "./../components/Footer";

export default function Smartphone() {
    return (
        <>
            <a href="/product" style={{ textDecoration: 'none'}}>
                <ProductHeader />
            </a>
            <h2 style={{ textAlign: "center", color: "#ffd9fd" }}>Smartphone Page</h2>
            <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A autem minima, neque asperiores, accusantium aspernatur, iure nam sint eum earum nesciunt cupiditate debitis ipsum exercitationem odio! Sequi illo quia itaque.
            </p>
            <Footer />
        </>
    )
}

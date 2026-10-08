import ProductHeader from "./../components/ProductHeader";
import Footer from "./../components/Footer";

export default function Computer() {
    return (
        <>
            <a href="/product" style={{ textDecoration: 'none' }}>
                <ProductHeader />
            </a>
            <h2 style={{ textAlign: "center", color: "#ffd9fd" }}>Computer Page</h2>
            <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repudiandae accusantium corporis, magnam enim commodi vel est modi voluptate iure doloremque autem deserunt architecto fugit consequatur, blanditiis unde culpa cumque.
            </p>
            <Footer />
        </>
    )
}

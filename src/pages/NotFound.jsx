import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function NotFound() {
    return (
        <>
            <Header />
            <h2 style={{ textAlign: "center", color: "#ff0000" }}>
                404 Page Not Found
            </h2>
            <Footer />
        </>
    )
}


export default function NavBarMain() {
    const a_style = {
        color: "white",
        textDecoration: 'none'
    };
    
    const div_style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e282ff',
        padding: '15px',
        marginBottom: '50px',
        gap: '5px',
    };

    return (
        <>
            <div style={div_style}>
                <a href="/" style={a_style}>HOME</a> |
                <a href="/about" style={a_style}>ABOUT</a> |
                <a href="/contact" style={{ color: "white", textDecoration: 'none' }}>CONTACT</a> |
                <a href="/product" style={{ color: "white", textDecoration: 'none' }}>PRODUCT</a> |
            </div>
        </>
    )
}

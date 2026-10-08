
export default function Productlink({ url, title , bgcolor}) { //props ชื่อ url กับ title
    const eiei = {
        textDecoration: 'none', 
        color: 'white', 
        padding: '10px 15px',
        borderRadius: '5px', 
        backgroundColor: bgcolor, 
    };

    return (
        <>
            <a href={url} style={eiei}>
                {title}
            </a>
        </>
    )
}

// const NotFound = ()=>{
//     return(
//         <div>
//             <h1>𝙋𝘼𝙂𝙀 𝙉𝙊𝙏 𝙁𝙊𝙐𝙉𝘿</h1>
//             <button type="button" className="btn btn-primary">Go To Home</button>
        
//         </div>
//     )
// }
// export default NotFound


const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>𝙋𝘼𝙂𝙀 𝙉𝙊𝙏 𝙁𝙊𝙐𝙉𝘿!</h1>
            <p style={styles.subText}>Oops! Oops! Oops! ˙◠˙ </p>
            <button style={styles.button}>Go To Back</button>
        </div>
    );
};

// Inline styles for unique styling
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        fontFamily: "'Poppins', sans-serif",
        textAlign: 'center',
    },
    heading: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#ff4d4d',
        textTransform: 'uppercase',
        letterSpacing: '2px',
    },
    subText: {
        fontSize: '1.2rem',
        color: 'blue',
        marginBottom: '2rem',
    },
    button: {
        padding: '0.8rem 2rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'danger',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default NotFound;
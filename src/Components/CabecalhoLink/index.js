import styles from './CabecalhoLink.module.css'
const { Link } = require("react-router-dom");

function CabecalhoLink({url, children}){
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>

    )
}
export default CabecalhoLink
import { CircularProgress } from "@mui/material"
import './Loader.scss'

const Loader = () => {
    return (
        <div className="loader-container">
            <CircularProgress className="loader" color="secondary" />
        </div>
    )
}

export default Loader
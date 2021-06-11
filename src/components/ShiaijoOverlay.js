import { useParams } from "react-router"
import Shiaijo from './Shiaijo'

const ShiaijoOverlay = (props) => {
    const data = props.matches
    const {id} = useParams()
    const areaId =  id.charCodeAt(0)- 65;

    return (
        <div>
            {data && <Shiaijo data={data[areaId]}></Shiaijo>}
        </div>
    )
}
export default ShiaijoOverlay
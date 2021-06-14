import { useParams } from "react-router-dom"
import Match from "../models/Match"
import Shiaijo from './Shiaijo'

const ShiaijoOverlay = (props: {matches: Match[]}) => {
    const data = props.matches
    const params: {id: string} = useParams()
    const areaId =  params.id.charCodeAt(0)- 65;

    return (
        <div className="canvas-wrapper-full">
            {data && areaId < data.length && <Shiaijo data={data[areaId]}></Shiaijo>}
        </div>
    )
}
export default ShiaijoOverlay
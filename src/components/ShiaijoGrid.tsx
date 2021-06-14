import Shiaijo from './Shiaijo';
import { useHistory} from 'react-router-dom';
import Match from '../models/Match';


const ShiaijoGrid = (props: {matches: Match[]}) => {
    const history = useHistory();

    const onShiaijoClick = (e: React.MouseEvent, shiaijo: string) => {
        e.preventDefault();
        history.push('/shiaijo/'+shiaijo)
    }

    return (
        <div className="d-flex flex-wrap">
            { props.matches && props.matches.map((match)=> 
            <div className="canvas_wrapper" onClick={(e) => onShiaijoClick(e, match.Shiaijo)}>
                <Shiaijo data={match}></Shiaijo>
            </div>
            )}
        </div>
    )
}
export default ShiaijoGrid
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
        <div className="d-flex flex-wrap h-100">
            { props.matches && props.matches.map((match)=> 
            <div key={match.Shiaijo} className="canvas-wrapper-grid" onClick={(e) => onShiaijoClick(e, match.Shiaijo)}>
                    <Shiaijo data={match}></Shiaijo>
            </div>
            )}
        </div>
    )
}
export default ShiaijoGrid
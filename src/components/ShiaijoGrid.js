import Shiaijo from './Shiaijo';
import { useHistory} from 'react-router-dom';


const ShiaijoGrid = (props) => {

    const history = useHistory();


    const onShiaijoClick = (e, shiaijo) => {
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
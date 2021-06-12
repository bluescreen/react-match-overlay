import { useHistory} from 'react-router-dom';
import Score from './Score'


const MatchTable = (props) => {
    const history = useHistory();


    const onRowClick = (e, shiaijo) => {
        e.preventDefault();
        history.push('/shiaijo/'+shiaijo)
    }

    return (
        <table className="match-table table table-striped table-hover" key="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th width="20%" colSpan="2">Name White</th>
                    <th  width="20%" className="text-end">Points White</th>
                    <th></th>
                    <th  width="20%">Points Red</th>
                    <th width="20%" colSpan="2">Name Red</th>
                </tr>
            </thead>
            <tbody>
                {props.matches && props.matches.map((row, i) => (
                    <tr className="match-table__row" key={i} onClick={(e) => onRowClick(e, row.Shiaijo)}>
                        <td>{row.Shiaijo}</td>
                        <td>{row.NumberTareWhite}</td>
                        <td>{row.NameTareWhite}</td>
                        <td>
                            <Score hits={[row.IpponWhite1, row.IpponWhite2, row.HansokuWhite]}></Score>
                        </td>
                        <td className="text-center">:</td>
                        <td>
                            <Score hits={[row.IpponRed1, row.IpponRed2, row.HansokuRed]}></Score>
                        </td>
                        
                        <td>{row.NumberTareRed}</td>
                        <td>{row.NameTareRed}</td>  
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MatchTable;
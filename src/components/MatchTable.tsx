import { useHistory} from 'react-router-dom';
import Score from './Score'
import Match from '../models/Match'


const MatchTable = (props: {matches: Match[]}) => {
    const history = useHistory();

    const onRowClick = (e: any, shiaijo: string) => {
        e.preventDefault();
        history.push('/shiaijo/'+shiaijo)
    }

    return (
        <table className="match-table table table-striped table-hover" key="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th></th>
                    <th></th>
                    <th className="row-auto" colSpan={2}>Name White</th>
                    <th className="row-auto text-end">Points White</th>
                    <th></th>
                    <th  className="row-auto"   >Points Red</th>
                    <th  className="row-auto"  colSpan={2}>Name Red</th>
                </tr>
            </thead>
            <tbody>
                {props.matches && props.matches.map((row: Match, i: number) => (
                    <tr className="match-table__row" key={i} onClick={(e) => onRowClick(e, row.Shiaijo)}>
                        <td>{row.Shiaijo}</td>
                        <td>{row.Fight}</td>
                        <td>{row.Pool}</td>
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
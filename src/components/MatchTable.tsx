import { useHistory} from 'react-router-dom';
import Score from './Score'
import Match from '../models/Match'
import {mapNumberToFlag} from '../helpers'
import { TeamMatch } from '../models/TeamMatch';


const MatchTable = (props: {matches: Match[]}) => {
    const history = useHistory();

    console.log(props.matches);

    const onRowClick = (e: any, shiaijo: string) => {
        e.preventDefault();
        history.push('/shiaijo/'+shiaijo)
    }

    return (
        <table className="match-table table table-striped table-hover" key="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Fight</th>
                    <th>No</th>
                    <th>Pool</th>
                    <th className="row-auto" colSpan={3}>Name White</th>
                    <th className="row-auto text-end" colSpan={3}>Points White</th>
                    <th></th>
                    <th  className="row-auto" colSpan={3}>Points Red</th>
                    <th  className="row-auto" colSpan={5}>Name Red</th>
                </tr>
            </thead>
            <tbody>
                {props.matches && props.matches.map((row: any, i: number) => (
                    <tr className="match-table__row" key={i} onClick={(e) => onRowClick(e, row.Shiaijo)}>
                        <td>{row.Shiaijo}</td>
                        <td>{row.Fight}</td>
                        <td>{row.FightNumber}</td>
                        <td>{row.Pool}</td>
                        <td><img alt=""  width={40} src={ mapNumberToFlag(row.NumberTareWhite, 'round', 'png')} /></td>
                        <td>{row.NumberTareWhite}</td>
                        <td>{row.NameTareWhite}</td>

                        <td>{row.WinsWhite > 0 && <span className="score rounded-2">{row.WinsWhite}</span>}</td>
                        <td>{row.SetWhite > 0 && <span className="score">{row.SetWhite}</span>}</td>
                        <td>
                            <Score hits={[row.IpponWhite1, row.IpponWhite2, row.HansokuWhite]}></Score>
                        </td>
                        <td className="text-center">
                            {row.EnchoOrHikiwake > 0 && <span className="score rounded-2">{row.EnchoOrHikiwake}</span>}
                            {row.TeamEnchoOrHikiwake > 0 && <span className="score rounded-2">{row.TeamEnchoOrHikiwake}</span>}
                        </td>
                        <td>
                            <Score hits={[row.IpponRed1, row.IpponRed2, row.HansokuRed]}></Score>
                        </td>
                        <td>{row.SetRed > 0 && <span className="score">{row.SetRed}</span>}</td>
                        <td>{row.WinsRed > 0 && <span className="score rounded-2">{row.WinsRed}</span>}</td>

                        
                        <td><img alt="" width={40} src={ mapNumberToFlag(row.NumberTareRed, 'round', 'png')} /></td>
                        <td>{row.NumberTareRed}</td>
                        <td>{row.NameTareRed}</td>  
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MatchTable;
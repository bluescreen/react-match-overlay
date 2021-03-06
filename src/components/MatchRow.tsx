import Score from './Score'
import { mapNumberToFlag } from '../helpers'


const MatchRow = (props: { row: any, onEdit: any}) => {
  const row = props.row;
  const redWins = row.IpponRed2 !== '' ||  row.IpponRed1 == 'C';
  const whiteWins = row.IpponWhite2 !== '' || row.IpponWhite1 == 'C';
  const isDone = redWins || whiteWins;

  console.log(redWins, whiteWins, row);

  return (
    <>
      <td><button className="btn btn-light btn-sm" style={{fontSize:20}} onClick={props.onEdit}>&#9998;</button></td>
      <td>{row.Shiaijo}</td>
      <td>{row.Fight}</td>
      <td>{row.FightNumber}</td>
      <td>{row.Pool}</td>
      <td ><img alt="" width={40} src={mapNumberToFlag(row.NumberTareWhite, 'round', 'png')} /></td>
      <td><b>{row.NumberTareWhite}</b><br />{row.NameTareWhite}</td>

      <td  className="points-td">{row.WinsWhite > 0 && <span className="score rounded-2">{row.WinsWhite}</span>}</td>
      <td>{row.SetWhite > 0 && <span className="score">{row.SetWhite}</span>}</td>
      <td className={"score-td " + ((whiteWins) ? 'bg-success' : '')}>
        <Score hits={[row.IpponWhite1, row.IpponWhite2, row.HansokuWhite]}></Score>
      </td>
      <td className="text-center">
        {row.EnchoOrHikiwake && (row.EnchoOrHikiwake == 'X' ? <span className="hikiwake">&#x2715;</span> : <span className="score rounded-2">{row.EnchoOrHikiwake}</span>)}
        {row.TeamEnchoOrHikiwake && (row.TeamEnchoOrHikiwake == 'X' ? <span className="hikiwake">&#x2715;</span> : <span className="score rounded-2">{row.TeamEnchoOrHikiwake}</span>)}
      </td>
      <td className={"score-td " + ((redWins) ? 'bg-success' : '')}>
        <Score hits={[row.IpponRed1, row.IpponRed2, row.HansokuRed]}></Score>
      </td>
      <td>{row.SetRed > 0 && <span className="score">{row.SetRed}</span>}</td>
      <td className="points-td">{row.WinsRed > 0 && <span className="score rounded-2">{row.WinsRed}</span>}</td>


      <td style={{width:40}}><img alt="" width={40} src={mapNumberToFlag(row.NumberTareRed, 'round', 'png')} /></td>
      <td><b>{row.NumberTareRed}</b><br />{row.NameTareRed}</td>
      <td>{isDone ? <span className="text-success" style={{ fontSize:30}}>&#x2713;</span> : ''}</td>
      {/**<td className="toggle-visible">
        <img width={20} src={row.Visible ? "/visible.png" : "/hidden.png"} />
  </td>**/}
    </>
  )
}

export default MatchRow;
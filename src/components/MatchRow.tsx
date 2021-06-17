import Score from './Score'
import { mapNumberToFlag } from '../helpers'


const MatchRow = (props: any) => {
  const row = props.row;
  return (
    <>
      <td></td>
      <td>{row.Shiaijo}</td>
      <td>{row.Fight}</td>
      <td>{row.FightNumber}</td>
      <td>{row.Pool}</td>
      <td ><img alt="" width={40} src={mapNumberToFlag(row.NumberTareWhite, 'round', 'png')} /></td>
      <td><b>{row.NumberTareWhite}</b><br />{row.NameTareWhite}</td>

      <td  className="points-td">{row.WinsWhite > 0 && <span className="score rounded-2">{row.WinsWhite}</span>}</td>
      <td>{row.SetWhite > 0 && <span className="score">{row.SetWhite}</span>}</td>
      <td className="score-td">
        <Score hits={[row.IpponWhite1, row.IpponWhite2, row.HansokuWhite]}></Score>
      </td>
      <td className="text-center">
        {row.EnchoOrHikiwake && (row.EnchoOrHikiwake == 'X' ? <span className="hikiwake">&#x2715;</span> : <span className="score rounded-2">{row.EnchoOrHikiwake}</span>)}
        {row.TeamEnchoOrHikiwake && (row.TeamEnchoOrHikiwake == 'X' ? <span className="hikiwake">&#x2715;</span> : <span className="score rounded-2">{row.TeamEnchoOrHikiwake}</span>)}
      </td>
      <td  className="score-td">
        <Score hits={[row.IpponRed1, row.IpponRed2, row.HansokuRed]}></Score>
      </td>
      <td>{row.SetRed > 0 && <span className="score">{row.SetRed}</span>}</td>
      <td className="points-td">{row.WinsRed > 0 && <span className="score rounded-2">{row.WinsRed}</span>}</td>


      <td style={{width:40}}><img alt="" width={40} src={mapNumberToFlag(row.NumberTareRed, 'round', 'png')} /></td>
      <td><b>{row.NumberTareRed}</b><br />{row.NameTareRed}</td>
      <td><img width={20} src={row.Visible ? "/visible.png" : "/hidden.png"}></img></td>
    </>
  )
}

export default MatchRow;
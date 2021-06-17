import Score from './Score'
import { mapNumberToFlag } from '../helpers'
import { useState } from 'react';


const MatchEditRow = (props: any) => {
  const row = props.row;
  const [data, setData] = useState(props.row)

  const update = (field: string, e: any) => {
    console.log(field, e.target.value)
    setData((prevState: any) => {
      return { ...prevState, [field]: e.target.value }
    });
  }

  return (
    <>
      <td>{row.Shiaijo}</td>
      <td>{row.Fight}</td>
      <td>{row.FightNumber}</td>
      <td>{row.Pool}</td>
      <td><img alt="" width={40} src={mapNumberToFlag(row.NumberTareWhite, 'round', 'png')} /></td>
      <td><input type="text" className="form-control" value={data.NumberTareWhite} onChange={(e) => update("NumberTareWhite", e)} ></input></td>
      <td><input type="text" className="form-control" value={data.NameTareWhite} onChange={(e) => update("NameTareWhite", e)}></input></td>

      <td>{row.WinsWhite > 0 && <span className="score rounded-2">{row.WinsWhite}</span>}</td>
      <td>{row.SetWhite > 0 && <span className="score">{row.SetWhite}</span>}</td>
      <td>
        <Score hits={[row.IpponWhite1, row.IpponWhite2, row.HansokuWhite]}></Score>
      </td>
      <td className="text-center">
        {row.EnchoOrHikiwake && (row.EnchoOrHikiwake == 'X' ? <span className="hikiwake">&#x2715;</span> : <span className="score rounded-2">{row.EnchoOrHikiwake}</span>)}
        {row.TeamEnchoOrHikiwake && (row.TeamEnchoOrHikiwake == 'X' ? <span className="hikiwake">&#x2715;</span> : <span className="score rounded-2">{row.TeamEnchoOrHikiwake}</span>)}
      </td>
      <td>
        <Score hits={[row.IpponRed1, row.IpponRed2, row.HansokuRed]}></Score>
      </td>
      <td>{row.SetRed > 0 && <span className="score">{row.SetRed}</span>}</td>
      <td>{row.WinsRed > 0 && <span className="score rounded-2">{row.WinsRed}</span>}</td>


      <td><img alt="" width={40} src={mapNumberToFlag(row.NumberTareRed, 'round', 'png')} /></td>
      <td><input type="text" className="form-control" value={data.NumberTareRed} onChange={(e) => update("NumberTareRed", e)}></input></td>
      <td><input type="text" className="form-control" value={data.NameTareRed} onChange={(e) => update("NameTareRed", e)}></input></td>
      <td>
        <button onClick={(e) => props.onSave(e, data)} className="btn btn-success">Save</button>
      </td>
    </>
  )
}

export default MatchEditRow;
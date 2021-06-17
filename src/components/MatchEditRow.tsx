import ScoreEdit from './Score'
import TareNumberEdit from './TareNumberEdit'
import { useState } from 'react';
import NumberInput from './NumberInput';


const MatchEditRow = (props: any) => {
  const row = props.row;
  const [data, setData] = useState(props.row)

  const update = (field: string, value: any) => {
    console.log(field, value)
    setData((prevState: any) => {
      return { ...prevState, [field]: value }
    });
  }

  return (
    <>
      <td>
        <button onClick={(e) => props.onSave(e, data)} className="btn btn-success">Save</button>
      </td>
      <td>{row.Shiaijo}</td>
      <td><NumberInput value={data.Fight} onChange={(e:any) => update("Fight", e.target.value)}></NumberInput></td>
      <td><NumberInput value={data.FightNumber} onChange={(e:any) => update("FightNumber", e.target.value)}></NumberInput></td>
      <td><NumberInput value={data.Pool} onChange={(e:any) => update("Pool", e.target.value)}></NumberInput></td>

      <td colSpan={2}>
        <TareNumberEdit value={data.NumberTareWhite} onChange={(value: any) => update("NumberTareWhite", value)}></TareNumberEdit>
        <input style={{width:190,marginTop:5}}  type="text" className="form-control" value={data.NameTareWhite} onChange={(e) => update("NameTareWhite", e.target.value)}></input>
      </td>
      <td className="points-td"><NumberInput value={data.WinsWhite} onChange={(e:any) => update("WinsWhite", e.target.value)}></NumberInput></td>
      <td><NumberInput value={data.SetWhite} onChange={(e:any) => update("SetWhite", e.target.value)}></NumberInput></td>
      <td className="score-td">
        <ScoreEdit hits={[row.IpponWhite1, row.IpponWhite2, row.HansokuWhite]}></ScoreEdit>
      </td>
      <td className="text-center">
        {row.EnchoOrHikiwake && (row.EnchoOrHikiwake === 'X' ? <span className="hikiwake">&#x2715;</span> : <span className="score rounded-2">{row.EnchoOrHikiwake}</span>)}
        {row.TeamEnchoOrHikiwake && (row.TeamEnchoOrHikiwake === 'X' ? <span className="hikiwake">&#x2715;</span> : <span className="score rounded-2">{row.TeamEnchoOrHikiwake}</span>)}
      </td>
      <td className="score-td">
        <ScoreEdit hits={[row.IpponRed1, row.IpponRed2, row.HansokuRed]}></ScoreEdit>
      </td>
      <td><NumberInput value={data.SetRed} onChange={(e:any) => update("SetRed", e.target.value)}></NumberInput></td>
      <td className="points-td"><NumberInput value={data.WinsRed} onChange={(e:any) => update("WinsRed", e.target.value)}></NumberInput></td>


      <td colSpan={2}>
        <TareNumberEdit value={data.NumberTareRed} onChange={(value: any) => update("NumberTareRed", value)}></TareNumberEdit>
        <input style={{width:190,marginTop:5}} type="text" className="form-control" value={data.NameTareRed} onChange={(e) => update("NameTareRed", e.target.value)}></input>
      </td>
      <td></td>
    </>
  )
}
export default MatchEditRow;
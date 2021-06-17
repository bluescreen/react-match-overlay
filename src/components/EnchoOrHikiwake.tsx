const EnchoOrHikiwake = (props: any) => {

  return (
    <select style={{ width:80}} className="form-control" value={props.value} onChange={props.onChange}>
      <option value=" ">&nbsp;</option>
      <option value="E">Encho</option>
      <option value="X">Hikiwake</option>
      <option value="Ht">Hantei</option>
      <option value="1">Ippon Gachi</option>
    </select>
  )
}

export default EnchoOrHikiwake;
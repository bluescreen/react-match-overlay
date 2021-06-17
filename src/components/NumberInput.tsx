
const NumberInput = (props: {value: number|undefined, onChange: any}) => {
  return (
    <input style={{width:40}}  type="number" className="form-control" value={props.value} onChange={props.onChange}></input>
  )
}
export default NumberInput;
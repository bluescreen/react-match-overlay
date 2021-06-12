const Score = (props) => {
    return (<div className="d-flex">
        {props.hits && props.hits.map((hit) => hit && <span className='score'>{hit}</span>)}
        </div> )

}
export default Score;
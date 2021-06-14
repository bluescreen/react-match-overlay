const Score = (props: { hits: string[]}) => {
    return (<div className="d-flex">
        {props.hits && props.hits.map((hit: string) => hit && <span className='score'>{hit}</span>)}
        </div> )

}
export default Score;
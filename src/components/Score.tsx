const Score = (props: { hits: any[] }) => {
    return (
        <div className="d-flex">
            {props.hits && props.hits.map((hit: string, n: number) => hit && <span key={n} className='score'>{hit}</span>)}
        </div>
    )
}
export default Score;
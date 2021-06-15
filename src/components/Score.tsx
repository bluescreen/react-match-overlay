const Score = (props: { hits: any[] }) => {
    return (
        <div className="d-flex">
            {props.hits && props.hits.map((hit: string, n: number) =>
                hit && (hit =='h' ?<span className="hansoku">&#x25B2;</span> : <span key={n} className='score'>{hit}</span>))}
        </div>
    )
}
export default Score;
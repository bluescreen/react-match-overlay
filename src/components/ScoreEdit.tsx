import { useEffect, useState } from "react"

const MAX_IPPONS = 2;
const MAX_PENALTY = 1;

const countIppons = (histlist: string[]) => {
    return histlist.reduce((sum, hit) => sum+(hit != "h" ? ((hit == 'C') ? 2 : 1): 0 ),0);
}

const ScoreEdit = (props: { hits: any[], onChange: any }) => {
    const [histlist, setHitList] = useState(props.hits.filter((el) => el));
    const numIppons = countIppons(histlist);
    const maxIpponsReached = numIppons == MAX_IPPONS;


    const removeIppon = (pos: number) => {
        const newHitList = [...histlist.slice(0,pos),
            ...histlist.slice(pos+1,histlist.length)]
        setHitList(newHitList);
        props.onChange(histlist);
    }

    const addIppon = (hit: string) => {
        const numIppons = countIppons(histlist);
        const numHansoku = histlist.filter((hit) => hit == "h").length;
        if (numIppons + 1 > MAX_IPPONS) {
            return;
        }
        if (hit === 'h' && numHansoku + 1 > MAX_PENALTY) {
            hit = "H";
        }

        setHitList((prevHitlist) => {
            let newList = [...prevHitlist, hit];
            if (hit == 'H') {
                newList = newList.filter((hit) => hit != 'h');
            }
            // push hansoku to the end
            newList.push(newList.splice(newList.indexOf('h'), 1)[0]);
            return newList  
        });
        
    }

    useEffect(() => {
        props.onChange(histlist);
    }, [histlist])

    return (
        <>
            <div className="btn-group mb-2 me-1">
                <button title="Men" onClick={() => addIppon('M')} className="btn btn-secondary btn-sm" disabled={maxIpponsReached}>M</button>
                <button title="Kote" onClick={() => addIppon('K')} className="btn btn-secondary btn-sm" disabled={maxIpponsReached}>K</button>
                <button title="Do" onClick={() => addIppon('D')} className="btn btn-secondary btn-sm" disabled={maxIpponsReached}>D</button>
                <button title="Tsuki" onClick={() => addIppon('T')} className="btn btn-secondary btn-sm" disabled={maxIpponsReached}>T</button>
            </div>
            <div className="btn-group mb-2 me-1">
                <button title="Hansoku" onClick={() => addIppon('h')} className="btn btn-danger btn-sm" disabled={maxIpponsReached}>&#x25B2;</button>
            </div>
            <div className="btn-group mb-2">
                <button title="Chusen" onClick={() => addIppon('C')} className="btn btn-secondary btn-sm" disabled={maxIpponsReached}>C</button>
                <button title="Fusen Gachi" onClick={() => addIppon('O')} className="btn btn-secondary btn-sm" disabled={maxIpponsReached}>O</button>
            </div>
            <div className="d-flex">
                {histlist && histlist.map((hit: string, n: number) =>
                    hit && (hit === 'h'
                        ? <span key={n} onClick={() => removeIppon(n)} className="hansoku score-btn ">&#x25B2;</span>
                        : <span key={n} onClick={()=> removeIppon(n)} className='score score-btn '>{hit}</span>))}
            </div>
            
        </>
    )
}
export default ScoreEdit;
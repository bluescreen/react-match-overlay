import { useHistory} from 'react-router-dom';


const MatchTable = (props) => {
    const history = useHistory();


    const onRowClick = (e, shiaijo) => {
        e.preventDefault();
        history.push('/shiaijo/'+shiaijo)
    }

    return (
        <table className="match-table table table-striped table-hover" key="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th width="20%" colSpan="2">Name White</th>
                    <th  width="20%" className="text-end">Points White</th>
                    <th></th>
                    <th  width="20%">Points Red</th>
                    <th width="20%" colSpan="2">Name Red</th>
                </tr>
            </thead>
            <tbody>
                {props.matches && props.matches.map((row, i) => (
                    <tr className="match-table__row" key={i} onClick={(e) => onRowClick(e, row.Shiaijo)}>
                        <td>{row.Shiaijo}</td>
                        <td>{row.NumberTareWhite}</td>
                        <td>{row.NameTareWhite}</td>
                        <td>
                            <div className="d-flex justify-content-end">
                                {[row.IpponWhite1, row.IpponWhite2, row.HansokuWhite].map((hit) => hit && <span className='score'>{hit}</span>)}
                            </div>
                        </td>

                        <td className="text-center">:</td>

                        <td>
                            <div className="d-flex">
                                {[row.IpponRed1, row.IpponRed2, row.HansokuRed].map((hit) => hit && <span className='score'>{hit}</span>)}
                            </div>
                        </td>
                        
                        <td>{row.NumberTareRed}</td>
                        <td>{row.NameTareRed}</td>  
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MatchTable;
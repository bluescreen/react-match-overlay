import { useHistory } from 'react-router-dom';

import Match from '../models/Match'
import MatchRow from './MatchRow'
import MatchEditRow from './MatchEditRow'
import { useState } from 'react';
import { FirestoreMutation } from "@react-firebase/firestore";



const MatchTable = (props: { matches: Match[], keys: string[] }) => {
    const [edit, setEdit] = useState<string | null>(null);
    const history = useHistory();
    
    const onEditClick = (e: any, shiaijo: string) => {
        e.preventDefault();
        setEdit(shiaijo)
    }

    const onSaveClick = (e: any, runMutation: any, row: any) => {
        e.preventDefault();
        runMutation(row).then((res: any) => {
            setEdit(null)
          });
    }

    return (
        <table className="match-table table table-striped table-condensed table-hover" key="table">
            <thead>
                <tr>
                    <th colSpan={2}>#</th>
                    <th>Fight</th>
                    <th>No</th>
                    <th>Pool</th>
                    <th className="row-auto" colSpan={3}>Name White</th>
                    <th className="row-auto text-end" colSpan={3}>Points White</th>
                    <th></th>
                    <th className="row-auto" colSpan={3}>Points Red</th>
                    <th className="row-auto">Name Red</th>
                    <th>Visible</th>
                </tr>
            </thead>
            <tbody>
                {props.matches && props.matches.map((row: any, i: number) => (
                    <tr className="match-table__row" key={i} onClick={(e) => onEditClick(e, row.Shiaijo)}>
                        {edit == row.Shiaijo
                            ?
                            <FirestoreMutation type="set" path={"matches/" + props.keys[i]}>
                                {({ runMutation }) => {
                                    return (
                                        <MatchEditRow onSave={(e:any, data:any) => onSaveClick(e, runMutation,data)} row={row} ></MatchEditRow>
                                    )
                                }}
                            </FirestoreMutation>
                            : <MatchRow onEdit={onEditClick} row={row}></MatchRow>}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MatchTable;
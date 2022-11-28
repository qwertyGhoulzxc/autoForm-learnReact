import React from 'react';
import {TableForm} from './tableStyle'

const Table = ({data}) => {
    return (
        <TableForm>
            <tr>
                <td>марка автомобиля</td>
                <td>год выпуска</td>
                <td>цена</td>
            </tr>
            {data.map(i=>{
                return(
                <tr>
                    <td>{i.mark}</td>
                    <td>{i.date}</td>
                    <td>{i.price}</td>
                </tr>   )


            })}
        </TableForm>
    );
};

export default Table;
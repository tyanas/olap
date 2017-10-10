import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const columns = [
    { key: 'name', label: 'Dessert (100g serving)'},
    { key: 'calories', label: 'Calories', numeric: true},
    { key: 'fat', label: 'Fat (g)', numeric: true},
    { key: 'carbs', label: 'Carbs (g)', numeric: true},
    { key: 'protein', label: 'Protein (g)', numeric: true},
];

function BasicTable(props) {
    const { columns, data } = props;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {columns && columns.map((column, index) => (
                        <TableCell
                            numeric={column.numeric}
                            key={index}>{column.label}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {columns && data.map(n => {
                    return (
                        <TableRow key={n.id}>
                            {columns.map((column, index) => (
                                <TableCell
                                    numeric={column.numeric}
                                    key={index}>{n[column.key]}</TableCell>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

BasicTable.propTypes = {
    classes: PropTypes.object,
    data: PropTypes.array,
    columns: PropTypes.array
};

BasicTable.defaultProps = {
    data: data,
    columns: columns
};

export default BasicTable;
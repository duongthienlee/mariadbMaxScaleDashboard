import React from 'react';
import { useSelector } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { useTable } from 'react-table'

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableHeaderProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <MaUTable {...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCell {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {rows.map(
                    (row, i) => {
                        prepareRow(row);
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <TableCell {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    }
                )}
            </TableBody>
        </MaUTable>
    )
}


const Overview = () => {
    const { data: { data: serverData } } = useSelector(state => state.auth)
    console.log("serverData", serverData)

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'ID',
                        accessor: 'id',
                    },
                    {
                        Header: 'Type',
                        accessor: 'type',
                    },
                ],
            }
        ],
        []
    )

    const data = React.useMemo(() => serverData, [serverData])
    return (
        <div>
            <CssBaseline />
            <Table columns={columns} data={data} />
        </div>
    )
}

export default Overview;


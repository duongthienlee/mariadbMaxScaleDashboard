import React from 'react'
import { useTable, useExpanded } from 'react-table'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useTableStyles, StyledTableCellBody, StyledTableCellHead } from './StyledTableComponents'

export default function ReactTable({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    })

    const classes = useTableStyles()
    // Render the UI for your table
    return (
        <Paper className={classes.root}>
            <Table className={classes.table} stickyHeader aria-label="Sever table" {...getTableProps()}>
                <TableHead >
                    {headerGroups.map(headerGroup => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <StyledTableCellHead variant='head' {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </StyledTableCellHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {rows.map(
                        (row, i) => {
                            prepareRow(row)

                            return (
                                <React.Fragment key={i}>
                                    <TableRow {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return (
                                                <StyledTableCellBody variant='body'{...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </StyledTableCellBody>
                                            )
                                        })}
                                    </TableRow>
                                </React.Fragment>
                            )
                        }
                    )}
                </TableBody>
            </Table>
        </Paper>
    )
}

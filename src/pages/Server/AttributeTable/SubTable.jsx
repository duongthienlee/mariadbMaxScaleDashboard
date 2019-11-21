import React from 'react'
import { StyledTableCellBody, StyledTableCellHead } from 'components/ReactTable/StyledTableComponents'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const SubTable = ({ row, type }) => {

    const { original: { attributes: { parameters, statistics } } } = row

    const removeEmpty = obj => {
        const newObj = {}

        Object.keys(obj).forEach(key => {
            if (obj[key] && typeof obj[key] === "object") {
                newObj[key] = removeEmpty(obj[key]) // recurse
            } else if (obj[key] != null) {
                newObj[key] = obj[key] // copy value
            }
        })

        return newObj
    }

    const ignoreNull = removeEmpty(type === "parameters" ? parameters : statistics)
    const keyNames = Object.keys(ignoreNull)
    const keyValues = Object.values(ignoreNull)

    return (
        <Table >
            <caption>Parameters of {row.original.id}</caption>
            <TableHead>
                <TableRow>
                    {keyNames.map((name, i) =>
                        <StyledTableCellHead key={i} variant='head'>
                            {name.toUpperCase()}
                        </StyledTableCellHead>
                    )}
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    {keyValues.map((value, i) =>
                        <StyledTableCellBody key={i} variant='body'>
                            {value.toString()}
                        </StyledTableCellBody>
                    )}
                </TableRow>
            </TableBody>
        </Table>
    )
}
export default SubTable
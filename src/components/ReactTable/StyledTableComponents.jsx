import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import { withStyles, makeStyles } from '@material-ui/core/styles'

export const StyledTableCellBody = (props) => {

    const StyledCellBody = withStyles(theme => ({
        head: {
            backgroundColor: 'white',
            color: theme.palette.primary.contrastText,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell)

    return (
        <React.Fragment>
            <StyledCellBody  {...props} />
        </React.Fragment>
    )
}


export const StyledTableCellHead = (props) => {

    const StyledCellHead = withStyles(theme => ({
        head: {
            backgroundColor: 'white',
            color: theme.palette.primary.contrastText,
            fontSize: 16
        },
        body: {
            fontWeight: 'bold'
        },
    }))(TableCell)

    return (
        <React.Fragment>
            <StyledCellHead {...props} />
        </React.Fragment>
    )
}


export const useTableStyles = makeStyles(theme => ({
    root: {
        overflowX: 'auto',
        width: '90%',
        maxHeight: 'calc(100vh - 204px )', // 100 marginTop&Bottom 64 topnav, 40 breadcrumb bar
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
        marginBottom: 50,
        padding: '0 20px 20px',
        background: 'white'
    },
    table: {
        background: 'white'
    },
    paper: {
        minWidth: 275,
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    iconCaption: {
        fontSize: 14
    },
    link: {
        margin: theme.spacing(1),
    },
}))



import React from 'react';
import { useSelector } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'
import { useTable } from 'react-table'
import CustomServerIcon from './CustomServerIcon'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 70
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
    gridCenter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}));
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
    const classes = useStyles();
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
        <Container className={classes.root} maxWidth="lg">
            <CssBaseline />
            {/*  <Table columns={columns} data={data} />*/}
            <Grid container spacing={4}>
                {serverData.map(server => {
                    return (
                        <Grid key={server.id} item xs={4}>
                            <Paper className={classes.paper}>
                                <Grid container spacing={0}>

                                    <Grid item xs={6} className={classes.gridCenter}>
                                        <CustomServerIcon />
                                        <Typography className={classes.iconCaption} color="textSecondary">
                                            Type: {server.type}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} className={classes.gridCenter}>
                                        <Typography className={classes.title} color="textPrimary">
                                            id: {server.id}
                                        </Typography>
                                        <Typography gutterBottom>
                                            <Link href={server.links.self} target="_blank" rel="noopener noreferrer" onClick={(e) => e.preventDefault()} className={classes.link}>
                                                Server URL
                                            </Link>
                                        </Typography>
                                        <Button variant="contained" color="secondary" size="small">&gt;&gt; More Info</Button>
                                    </Grid>
                                </Grid>

                            </Paper>
                        </Grid>
                    )
                })}

            </Grid>

        </Container >
    )
}

export default Overview;


import React from 'react'
import ReactTable from 'components/ReactTable'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import SubTable from './SubTable'
import { makeStyles } from '@material-ui/core/styles'

const AttributesTable = ({ serverInfo }) => {

    const useStyles = makeStyles(theme => ({
        paper: {
            overflowX: 'auto',
            top: `${50}%`,
            left: `${50}%`,
            transform: `translate(-${50}%, -${50}%)`,
            width: '85%',
            position: 'absolute',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        tableBtn: {
            fontSize: '0.6125rem',
            padding: '6px 10px'
        }
    }))

    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [currentRow, setCurrentRow] = React.useState(null)
    const [currentSubTableType, setCurrentSubTableType] = React.useState(null)

    const columns = React.useMemo(
        () => [
            {
                Header: 'Attributes',
                columns: [
                    {
                        Header: 'Last Event',
                        accessor: 'attributes.last_event',
                    },
                    {
                        Header: 'Master ID',
                        accessor: 'attributes.master_id',
                    },
                    {
                        Header: 'Node ID',
                        accessor: 'attributes.node_id',
                    },
                    {
                        Header: 'Replication Lag',
                        accessor: 'attributes.replication_lag',
                    },
                    {
                        Header: 'State',
                        accessor: 'attributes.state',
                    },
                    {
                        Header: 'Triggered At',
                        accessor: 'attributes.triggered_at',
                    },
                    {
                        Header: 'Version String',
                        accessor: 'attributes.version_string',
                    },
                    {
                        Header: 'Parameters',
                        Cell: ({ row }) =>
                            <Button className={classes.tableBtn} onClick={() => openSubTable(row, "parameters")} variant="contained" color="secondary" >More Info</Button>
                    },
                    {
                        Header: 'Statistics',
                        Cell: ({ row }) =>
                            <Button className={classes.tableBtn} onClick={() => openSubTable(row, "statistics")} variant="contained" color="secondary">More Info</Button>
                    }


                ],
            }
        ],
        [classes.tableBtn]
    )

    const handleClose = () => {
        setOpen(false)
    }

    function openSubTable(row, type) {
        setOpen(true)
        setCurrentRow(row)
        setCurrentSubTableType(type)
    }
    const data = React.useMemo(() => [serverInfo], [serverInfo])

    return (
        <div>
            <ReactTable columns={columns} data={data} />
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Paper className={classes.paper}>

                    <SubTable type={currentSubTableType} row={currentRow} />
                </Paper>
            </Modal>

        </div >
    )
}
export default AttributesTable
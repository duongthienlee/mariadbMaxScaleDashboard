import React from 'react'
import ReactTable from 'components/ReactTable'
import Typography from '@material-ui/core/Typography'

const RelationshipsTable = ({ serverInfo }) => {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Relationships',
                columns: [
                    {
                        Header: 'Monitors',
                        Cell: ({ row: { original: { relationships: { monitors: { data } } } } }) => {
                            return (
                                <>
                                    {data.map((monitor, i) =>
                                        <Typography key={i} component="p">
                                            {monitor.id}
                                        </Typography>
                                    )}
                                </>
                            )
                        }
                    },
                    {
                        Header: 'Services',
                        Cell: ({ row: { original: { relationships: { services: { data } } } } }) => {
                            return (
                                <>
                                    {data.map((service, i) =>
                                        <Typography key={i} component="p">
                                            {service.id}
                                        </Typography>
                                    )}
                                </>
                            )
                        }
                    },

                ],
            }
        ],
        []
    )

    const data = React.useMemo(() => [serverInfo], [serverInfo])

    return (
        <div>
            <ReactTable columns={columns} data={data} />
        </div >
    )
}
export default RelationshipsTable
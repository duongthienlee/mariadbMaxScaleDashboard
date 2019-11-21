import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import CustomServerIcon from './CustomServerIcon'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { useHistory } from "react-router-dom"
import { fetchServerData } from 'store/actions/servers'

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
}))


const ServerOverView = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        let credentials = localStorage.getItem("credentials")
        dispatch(fetchServerData(credentials))

    }, [dispatch])

    let history = useHistory()
    const { data: serverData } = useSelector(state => state.servers)
    const classes = useStyles()

    return (
        <Container className={classes.root} maxWidth="lg">
            <CssBaseline />
            <Grid container spacing={4}>
                {serverData && serverData.map(server => {
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
                                        <Button onClick={() =>
                                            history.push({
                                                pathname: `/server/${server.id}`,
                                                state: {
                                                    serverInfo: server
                                                }
                                            })} variant="contained" color="secondary" size="small">&gt;&gt; More Info</Button>
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

export default ServerOverView


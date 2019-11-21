

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { InputLabel, FormControl, Button, FormControlLabel, Checkbox, } from '@material-ui/core'
import BootstrapInput from 'components/BootstrapInput'
import { auth } from 'store/actions/auth'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles(theme => ({
    formWrapper: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        width: "100%",
    },
    form: {
        margin: theme.spacing(1),
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    }
}))

const Form = () => {

    const dispatch = useDispatch()
    const [userInput, setUserInput] = useState({ username: "", password: "" })

    const classes = useStyles()


    const handleChange = e => {
        e.preventDefault()
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        })
    }

    const submitLogin = e => {
        e.preventDefault()
        dispatch(auth(userInput))
    }

    return (
        <form className={classes.formWrapper} noValidate>
            <FormControl className={classes.form}>
                <InputLabel shrink htmlFor="username">
                    Username
                </InputLabel>
                <BootstrapInput
                    name="username"
                    required
                    fullWidth
                    id="username"
                    autoComplete="username"
                    autoFocus
                    value={userInput.username}
                    onChange={(e) => handleChange(e)}
                />

            </FormControl>
            <FormControl className={classes.form}>
                <InputLabel shrink htmlFor="password">
                    Password
                </InputLabel>
                <BootstrapInput
                    name="password"
                    required
                    fullWidth
                    id="password"
                    autoComplete="password"
                    value={userInput.password}
                    type="password"
                    onChange={(e) => handleChange(e)}
                />
            </FormControl>
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(e) => submitLogin(e)}
            >
                Sign In
            </Button>
        </form>
    )
}

export default Form
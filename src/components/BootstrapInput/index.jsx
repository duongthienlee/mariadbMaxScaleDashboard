import { fade, withStyles } from '@material-ui/core/styles'
import { InputBase } from '@material-ui/core'

const BootstrapInput = withStyles(theme => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3)
        }
    },
    input: {
        position: "relative",
        backgroundColor: theme.palette.common.white,
        border: "1px solid #ced4da",
        borderRadius: 20,
        fontSize: 16,
        width: "100%",
        padding: "10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        "&:focus": {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main
        }
    }
}))(InputBase)


export default BootstrapInput
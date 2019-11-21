import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'

const useStyles = makeStyles(theme => ({
    root: {
        "& > svg": {
            margin: theme.spacing(0)
        },

    },
    icon: {
        fontSize: '4.1875rem',
        "&:hover": {
            color: theme.palette.primary.dark
        }
    }
}))

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    )
}

export default function CustomServerIcon(props) {
    const classes = useStyles()

    return (
        <div className={classes.root} >
            <HomeIcon
                className={classes.icon}
                color="primary"
                component={svgProps => {
                    return (
                        <svg

                            {...svgProps}
                            xmlns="http://www.w3.org/2000/svg"
                            width="59.615"
                            height="86.441"
                            viewBox="0 0 59.615 86.441"
                        >
                            <g
                                className="serverIcon"
                                data-name="Server"
                                transform="translate(0 59.441)"
                            >
                                <rect
                                    width="59.615"
                                    height="27"
                                    data-name="Rectangle 6"
                                    rx="4"
                                />
                                <path
                                    fill="#fff"
                                    d="M0 0H29V5H0z"
                                    data-name="Rectangle 4"
                                    transform="translate(24.615 11)"
                                />
                                <circle
                                    cx="6.75"
                                    cy="6.75"
                                    r="6.75"
                                    fill="#fff"
                                    data-name="Ellipse 2"
                                    transform="translate(7 7)"
                                />
                            </g>
                            <g className="serverIcon" data-name="Server">
                                <rect
                                    width="59.615"
                                    height="27"
                                    data-name="Rectangle 6"
                                    rx="4"
                                />
                                <path
                                    fill="#fff"
                                    d="M0 0H29V5H0z"
                                    data-name="Rectangle 4"
                                    transform="translate(24.615 11)"
                                />
                                <circle
                                    cx="6.75"
                                    cy="6.75"
                                    r="6.75"
                                    fill="#fff"
                                    data-name="Ellipse 3"
                                    transform="translate(6 7)"
                                />
                            </g>
                            <g
                                className="serverIcon"
                                data-name="Server"
                                transform="translate(0 29.721)"
                            >
                                <rect
                                    width="59.615"
                                    height="27"
                                    data-name="Rectangle 6"
                                    rx="4"
                                />
                                <path
                                    fill="#fff"
                                    d="M0 0H29V5H0z"
                                    data-name="Rectangle 4"
                                    transform="translate(24.615 11)"
                                />
                                <circle
                                    cx="6.75"
                                    cy="6.75"
                                    r="6.75"
                                    fill="#fff"
                                    data-name="Ellipse 4"
                                    transform="translate(7 7)"
                                />
                            </g>
                            {React.cloneElement(svgProps.children[0], {
                                fill: "url(.serverIcon)"
                            })}
                        </svg>
                    )
                }}
            />
        </div>
    )
}

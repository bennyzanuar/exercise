import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
    header: {
        backgroundColor: '#F66946'
    },
    title:{
        color: '#000000',
        fontSize: 16,
        fontWeight: 800
    }
}

const NavBar = (props) => {
    const { classes } = props
    return(
        <>
            <AppBar position="static">
                <Toolbar className={classes.header}>
                    <Typography className={classes.title}>
                        Exchange App
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar)
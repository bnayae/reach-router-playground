import * as React from 'react';
import { AppBar, makeStyles, Theme, createStyles, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: "absolute",
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        behindBar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        }
    }),
);

export interface ITopBarProps {
}

export function TopBar() {
    const classes = useStyles();

    return (
        <>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        // onClick={e => setOpen(!open)}
                        edge="start"
                        //className={clsx(classes.menuButton, { [classes.hide]: open, })}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Company Logo
                </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.behindBar}></div>
        </>
    );
}

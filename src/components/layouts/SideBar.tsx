import React, { useState } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { List } from '@material-ui/core';
import LinkTo from '../routing/LinkTo'
import { useObservable } from './../contexts/useObservable';
import ILinkToProps from '../routing/ILinkToProps';
import IconButton from '@material-ui/core/IconButton';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

export default function SideBar() {
    const classes = useStyles();
    const theme = useTheme();
    const options: ILinkToProps[] = useObservable();
    const [open, setOpen] = useState<boolean>(false);

    const iconFn: any = () => {
        if (theme.direction === 'rtl') {
            if (open) {
                return <ChevronRightIcon />;
            }
            return <ChevronLeftIcon />;
        }
        else {
            if (open) {
                return <ChevronLeftIcon />;
            }
            return <ChevronRightIcon />;
        }
    }

    const icon = iconFn();

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
            open={open}
        >
            <div className={classes.toolbar} /> {/* hidden behind the toolbar */}
            <Divider />
            <div className={classes.toolbar}>
                <IconButton onClick={e => setOpen(!open)}>
                    {icon}
                </IconButton>
            </div>
            <Divider />
            <List>
                {options.map((option, index) => (
                    option ? <LinkTo text={option.text} to={option.to} icon={option.icon} /> : <Divider />
                ))}
            </List>
        </Drawer>
    );
}

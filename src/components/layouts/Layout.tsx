import * as React from 'react';
import { useState } from 'react';
import SideBarContext from '../Contexts/SideBarContext';
import SideBar from './SideBar'
import MainArea from './MainArea'
import { TopBar } from './TopBar';
import { Grid, CssBaseline, makeStyles, Theme, createStyles } from '@material-ui/core';

export interface ILayoutProps {
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
    }),
);

export default function Layout(props: ILayoutProps) {
    const [open, setOpen] = useState<boolean>(false);
    const classes = useStyles();

    return (
        <SideBarContext.Provider value={{ open, setOpen }}>
            <div className={classes.root}>
                <CssBaseline />
                <Grid container={true} direction="row" justify="flex-start" alignItems="stretch">
                    <Grid item xs={12}>
                        <TopBar />
                    </Grid>
                    <Grid item xs="auto">
                        <SideBar />
                    </Grid>
                    <Grid item xs="auto">
                        <MainArea />
                    </Grid>
                </Grid>
            </div>
        </SideBarContext.Provider>
    );
}

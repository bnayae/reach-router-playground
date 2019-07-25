import * as React from 'react';
import { useState } from 'react';
import SideBarContext from '../contexts/SideBarContext';
import SideBar from './SideBar'
import { TopBar } from './TopBar';
import { Grid, CssBaseline, makeStyles, Theme, createStyles } from '@material-ui/core';
import { Redirect, Route, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Users from '../pages/Users'
import NoMatch from '../pages/NoMatch'
import ILinkToProps from '../routing/ILinkToProps'

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
    const [options, setOptions] = useState<(ILinkToProps | undefined)[]>([]);
    const classes = useStyles();

    return (
        <SideBarContext.Provider value={{ open, setOpen, options, setOptions }}>
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
                        <Switch>
                            <Route exact path="/" component={Home} />

                            <Route path="/users" component={Users} />
                            <Redirect from="/accounts" to="/users" />

                            <Route component={NoMatch} />
                        </Switch>

                    </Grid>
                </Grid>
            </div>
        </SideBarContext.Provider>
    );
}

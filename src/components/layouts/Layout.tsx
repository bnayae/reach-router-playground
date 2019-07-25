import * as React from 'react';
import SideBarContext from '../contexts/SideBarContext';
import SideBar from './SideBar'
import { TopBar } from './TopBar';
import { Grid, CssBaseline, makeStyles, Theme, createStyles } from '@material-ui/core';
import { Redirect, Route, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Users from '../pages/Users'
import NoMatch from '../pages/NoMatch'

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
    const classes = useStyles();

    return (
        <SideBarContext>
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
        </SideBarContext>
    );
}

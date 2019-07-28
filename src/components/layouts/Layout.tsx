import * as React from 'react';
import { Suspense, lazy } from 'react';

import SideBarContext from '../contexts/SideBarObservableContext';
import SideBar from './SideBar'
import { TopBar } from './TopBar';
import { Grid, CssBaseline, makeStyles, Theme, createStyles } from '@material-ui/core';
import { Redirect, Route, Switch } from "react-router-dom";
// import User from '../pages/User';
// import Home from '../pages/Home'
// import Users from '../pages/Users'
// import About from '../pages/About'
// import NoMatch from '../pages/NoMatch'
const Home = lazy(() => import('../pages/Home'));
const User = lazy(() => import('../pages/User'));
const Users = lazy(() => import('../pages/Users'));
const About = lazy(() => import('../pages/About'));
const NoMatch = lazy(() => import('../pages/NoMatch'));

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
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route exact path="/" component={Home} />

                                <Route path="/users/:id" component={User} />
                                <Route exact path="/users" component={Users} />
                                <Redirect from="/accounts/:id" to="/users/:id" />
                                <Redirect exact from="/accounts" to="/users" />

                                <Route path="/about" component={About} />

                                <Route component={NoMatch} />
                            </Switch>
                        </Suspense>

                    </Grid>
                </Grid>
            </div>
        </SideBarContext>
    );
}

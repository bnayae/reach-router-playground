import * as React from 'react';
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core';

export interface IMainAreaProps {
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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

export default function MainArea(props: IMainAreaProps) {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography paragraph>
                Some content.
            </Typography>
            <Typography paragraph>
                More content.
            </Typography>
        </main>
    );
}

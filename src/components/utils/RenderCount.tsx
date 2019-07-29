import * as React from 'react';
import {
    Fab, makeStyles, Theme, createStyles
} from "@material-ui/core";
import { useState, useEffect } from 'react';

export interface IRenderCountProps {
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            alignSelf: "center",
            margin: theme.spacing(1),
        }
    }),
);

export default function RenderCount(props: IRenderCountProps) {
    const classes = useStyles();
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        return () => {
            setCount(count + 1);
        };
    });

    return (
        <Fab color="secondary" variant="round" size="small" aria-label={`${count}`} className={classes.fab}>
            {count}
        </Fab>
    );
}

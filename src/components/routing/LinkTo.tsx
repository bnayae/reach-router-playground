import * as React from 'react';
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ILinkToProps from './ILinkToProps'

export default function LinkTo(props: ILinkToProps) {
    const { to, text, icon } = props;
    return (
        <Link to={to}>
            <ListItem button key={text}>
                <ListItemIcon>{icon ? icon : <></>}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        </Link>
    );
}

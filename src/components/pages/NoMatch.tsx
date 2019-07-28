import * as React from 'react';

import ILinkToProps from '../routing/ILinkToProps';
import useSideBar from '../contexts/useSideBar';

import UserIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Announcement';

export interface INoMatchProps {
}

export default function NoMatch(props: INoMatchProps) {
    const navigation: ILinkToProps[] = [
        { to: "/", text: "Home", icon: <HomeIcon /> },
        { to: "/users", text: "Users", icon: <UserIcon /> },
        { to: "/about", text: "About", icon: <AboutIcon /> },
    ];
    useSideBar(navigation);

    return (
        <div>
            <h5>Under construction</h5>
        </div>
    );
}

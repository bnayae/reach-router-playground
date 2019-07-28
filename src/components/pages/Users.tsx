import * as React from 'react';
import ILinkToProps from '../routing/ILinkToProps';
import useSideBar from '../contexts/useSideBar';

import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Announcement';
import useRouter from '../routing/useRouter';
import { Link } from 'react-router-dom';

export interface IUsersProps {
}

export default function Users(props: IUsersProps) {
    const navigation: ILinkToProps[] = [
        { to: "/", text: "Home", icon: <HomeIcon /> },
        { to: "/about", text: "About", icon: <AboutIcon /> },
    ];
    useSideBar(navigation);
    const { location } = useRouter();

    return (
        <div>
            <h4>Users</h4>
            <p>current location = {location.pathname}</p>
            <ul>
                <Link to="/users/1"><li key="1">User A</li></Link>
                <Link to="/users/2"><li key="2">User B</li></Link>
                <Link to="/users/3"><li key="3">User C</li></Link>
            </ul>
        </div>
    );
}

import * as React from 'react';
import { useEffect } from 'react';
import useUpdater from './../contexts/useUpdater';
import ILinkToProps from '../routing/ILinkToProps';

import UserIcon from '@material-ui/icons/Group';
import AdminIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';

export interface IAboutProps {
}

export default function About(props: IAboutProps) {
    var { setValue } = useUpdater();

    useEffect(() => {
        const navigation: ILinkToProps[] = [
            { to: "/", text: "Home", icon: <HomeIcon /> },
            { to: "/users", text: "Users", icon: <UserIcon /> },
            { to: "/users?id=1", text: "Admin", icon: <AdminIcon /> },
        ];
        setValue(navigation);

        return () => setValue([]);
        // eslint-disable-next-line
    }, []);

    return (
        <h3>About</h3>
    );
}

import * as React from 'react';
import { useEffect } from 'react';
import useUpdater from './../contexts/useUpdater';
import ILinkToProps from '../routing/ILinkToProps';

import UserIcon from '@material-ui/icons/Group';
import AboutIcon from '@material-ui/icons/Announcement';

export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    var { setValue } = useUpdater();

    useEffect(() => {
        const navigation: ILinkToProps[] = [
            { to: "/users", text: "Users", icon: <UserIcon /> },
            { to: "/about", text: "About", icon: <AboutIcon /> },
        ];
        setValue(navigation);

        return () => setValue([]);
    }, []);

    return (
        <h3>Home</h3>
    );
}

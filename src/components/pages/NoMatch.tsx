import * as React from 'react';

import useUpdater from './../contexts/useUpdater';
import ILinkToProps from '../routing/ILinkToProps';

import UserIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Announcement';

export interface INoMatchProps {
}

export default function NoMatch(props: INoMatchProps) {
    var { setValue } = useUpdater();

    React.useEffect(() => {
        const navigation: ILinkToProps[] = [
            { to: "/", text: "Home", icon: <HomeIcon /> },
            { to: "/users", text: "Users", icon: <UserIcon /> },
            { to: "/about", text: "About", icon: <AboutIcon /> },
        ];
        setValue(navigation);

        return () => setValue([]);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h5>Under construction</h5>
        </div>
    );
}

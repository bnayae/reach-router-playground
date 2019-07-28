import * as React from 'react';
import { useEffect } from 'react';
import ILinkToProps from '../routing/ILinkToProps';
import useSideBarObservableUpdater from '../contexts/useSideBarObservableUpdater';

import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Announcement';
import useRouter from '../routing/useRouter';
import { Link } from 'react-router-dom';

export interface IUsersProps {
}

export default function Users(props: IUsersProps) {
    var { setValue } = useSideBarObservableUpdater();
    const { location } = useRouter();

    useEffect(() => {
        const navigation: ILinkToProps[] = [
            { to: "/", text: "Home", icon: <HomeIcon /> },
            { to: "/about", text: "About", icon: <AboutIcon /> },
        ];
        setValue(navigation);

        return () => setValue([]);
        // eslint-disable-next-line
    }, []);

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

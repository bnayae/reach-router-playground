import * as React from 'react';
import { useEffect } from 'react';
import ILinkToProps from '../routing/ILinkToProps';
import useUpdater from '../contexts/useUpdater';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Announcement';
import useRouter from '../routing/useRouter';

export interface IUsersProps {
    id?: number
}

export default function Users(props: IUsersProps) {
    var { setValue } = useUpdater();
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
            <p>id = {props.id}</p>
            <p>current location = {location.pathname}</p>
        </div>
    );
}

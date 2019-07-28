import * as React from 'react';
import { useEffect } from 'react';
import useSideBarObservableUpdater from '../contexts/useSideBarObservableUpdater';
import ILinkToProps from '../routing/ILinkToProps';
import useRouter from '../routing/useRouter'
import UserIcon from '@material-ui/icons/Group';
import AboutIcon from '@material-ui/icons/Announcement';

export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    var { setValue } = useSideBarObservableUpdater();
    const { location } = useRouter();

    useEffect(() => {
        const navigation: ILinkToProps[] = [
            { to: "/users", text: "Users", icon: <UserIcon /> },
            { to: "/about", text: "About", icon: <AboutIcon /> },
        ];
        setValue(navigation);

        return () => setValue([]);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <h3>Home</h3>
            <p>current location = {location.pathname}</p>
            {/* <p>match: {match.path}</p>
            <p>come from = {history.length === 0 ? 'nowhere' : history.location}</p> */}
        </>
    );
}

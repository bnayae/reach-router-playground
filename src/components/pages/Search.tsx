import * as React from 'react';
import { useEffect } from 'react';
import ILinkToProps from '../routing/ILinkToProps';
import useSideBarObservableUpdater from '../contexts/useSideBarObservableUpdater';
import useRouter from '../routing/useRouter';

import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Announcement';
import UserIcon from '@material-ui/icons/Group';

export interface ISearchProps {
}

export default function Search(props: ISearchProps) {
    var { setValue } = useSideBarObservableUpdater();
    const { location, match } = useRouter<{ id: string }, any, any>();

    useEffect(() => {
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
            <h4>Search</h4>

            <p>current location = {location.pathname}</p>
            <p>Query Params is {location.search}</p>
            <p>Parsed Query Params is {location.search.substr(3)}</p>
            <p>
                <strong>Match Props: </strong>
                <code>{JSON.stringify(match, null, 2)}</code>
            </p>
            <p>
                <strong>Location Props: </strong>
                <code>{JSON.stringify(location, null, 2)}</code>
            </p>

        </div>
    );
}

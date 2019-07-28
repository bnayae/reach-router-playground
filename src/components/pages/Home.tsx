import * as React from 'react';
import { useEffect, useState } from 'react';
import useSideBarObservableUpdater from '../contexts/useSideBarObservableUpdater';
import ILinkToProps from '../routing/ILinkToProps';
import useRouter from '../routing/useRouter'
import { Link } from 'react-router-dom';

import UserIcon from '@material-ui/icons/Group';
import AboutIcon from '@material-ui/icons/Announcement';
import LinkTo from '../routing/LinkTo';

export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    var { setValue } = useSideBarObservableUpdater();
    const [search, setSearch] = useState("");

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
            <input type="text" onChange={e => setSearch(e.target.value)} />
            <Link to={`/search?q=${search}`}> Search</Link>
            {/* <LinkTo to="/props" text="With Properties" NOT WORKING: props={{ title: "From Home", count: seconds }} /> */}
            <LinkTo to="/props" text="With Properties" />
        </>
    );
}

import * as React from 'react';
import { useEffect } from 'react';
import UserIcon from '@material-ui/icons/Mail';
import useUpdater from './../contexts/useUpdater';
import ILinkToProps from '../routing/ILinkToProps';

export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    var { setValue } = useUpdater();
    useEffect(() => {
        const homeNavigations: ILinkToProps[] = [{ to: "/users", text: "Users", icon: <UserIcon /> }];
        console.log(homeNavigations);
        setValue(homeNavigations);
    }, []);
    return (
        <h3>Home</h3>
    );
}

import * as React from 'react';

import ILinkToProps from '../../routing/ILinkToProps';
import IWithPropsProps from './IWithPropsProps'
import useRouter from '../../routing/useRouter';
import useSideBar from '../../contexts/useSideBar';

import UserIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Announcement';


export default function WithProps(props: IWithPropsProps) {
    const navigation: ILinkToProps[] = [
        { to: "/", text: "Home", icon: <HomeIcon /> },
        { to: "/users", text: "Users", icon: <UserIcon /> },
        { to: "/about", text: "About", icon: <AboutIcon /> },
    ];
    useSideBar(navigation);
    const { location, match } = useRouter<{ id: string }, any, any>();

    return (
        <div>
            <h3>With Properties</h3>
            <h4>{props.title} = {props.count}</h4>
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

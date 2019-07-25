import * as React from 'react';
import SideBarContext, { ISideBarContext } from '../contexts/SideBarContext';
import { useContext, useEffect } from 'react';
import UserIcon from '@material-ui/icons/Mail';

export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    const { setOptions }: ISideBarContext = useContext(SideBarContext)
    useEffect(() => {
        return () => {
            setOptions([{ to: "/users", text: "Users", icon: <UserIcon /> }])
        };
    })
    return (
        <h3>Home</h3>
    );
}

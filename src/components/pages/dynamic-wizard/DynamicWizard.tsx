
import * as React from 'react';
import ILinkToProps from '../../routing/ILinkToProps';
import useSideBar from '../../contexts/useSideBar'

import UserIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Announcement';
import WizardIcon from '@material-ui/icons/School';
import NestIcon from '@material-ui/icons/ArtTrack';

export interface IDynamicWizardProps {
}

// const required = (value: string) => value ? undefined : "Required";

// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))



export default function DynamicWizard(props: IDynamicWizardProps) {
    const navigation: ILinkToProps[] = [
        { to: "/", text: "Home", icon: <HomeIcon /> },
        { to: "/users", text: "Users", icon: <UserIcon /> },
        { to: "/nest", text: "Nesting", icon: <NestIcon /> },
        { to: "/about", text: "About", icon: <AboutIcon /> },
    ];
    useSideBar(navigation);

    return (
        <>
            <h3>Wizard</h3>

        </>
    );
}

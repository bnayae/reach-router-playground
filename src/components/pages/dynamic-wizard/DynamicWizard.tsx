
import * as React from 'react';
import ILinkToProps from '../../routing/ILinkToProps';
import useSideBar from '../../contexts/useSideBar'
import WizardContext from './context/WizardContext';
import IWizardState from './state/IWizardState';
import WizardState from './state/WizardState';

import UserIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Announcement';
import NestIcon from '@material-ui/icons/ArtTrack';


export interface IDynamicWizardProps {
}

// const required = (value: string) => value ? undefined : "Required";

// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


// TODO: route to every stage and send the parameters from state
//          each stage should get it it last or not
//          back via routing
//          send the submit func into the stage 

export default function DynamicWizard(props: IDynamicWizardProps) {
    const navigation: ILinkToProps[] = [
        { to: "/", text: "Home", icon: <HomeIcon /> },
        { to: "/users", text: "Users", icon: <UserIcon /> },
        { to: "/nest", text: "Nesting", icon: <NestIcon /> },
        { to: "/about", text: "About", icon: <AboutIcon /> },
    ];
    useSideBar(navigation);

    const data: IWizardState = new WizardState();

    return (
        <>
            <WizardContext.Provider value={data}>
                <h3>Wizard</h3>

            </WizardContext.Provider>
        </>
    );
}

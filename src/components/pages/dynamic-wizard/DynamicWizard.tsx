
import * as React from 'react';
import ILinkToProps from '../../routing/ILinkToProps';
import useSideBar from '../../contexts/useSideBar'
import WizardContext from './context/WizardContext';
import IWizardState from './state/IWizardState';
import WizardState from './state/WizardState';
import useRouter from '../../routing/useRouter';
import Stage0 from './stages/Stage0'
import StageA from './stages/StageA'
import StageB from './stages/StageB'
import StageC from './stages/StageC'
import IStageA from './state/stages/IStageA';
import IStageB from './state/stages/IStageB';
import IStageC from './state/stages/IStageC';

import UserIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Announcement';
import NestIcon from '@material-ui/icons/ArtTrack';
import { Switch, Route } from 'react-router';
import { FormApi, SubmissionErrors } from 'final-form';
import { useState } from 'react';


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
    const [stageIndex, setStageIndex] = useState(-1);

    const { match, history, location } = useRouter();

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit0 = async (values: string[],
        form: FormApi<string[]>,
        callback?: (errors?: SubmissionErrors) => void) => {
        await sleep(500);
        setStageIndex(stageIndex + 1);
        alert(JSON.stringify(values, undefined, 2));
    };

    const onSubmitA = async (values: IStageA,
        form: FormApi<IStageA>,
        callback?: (errors?: SubmissionErrors) => void) => {
        await sleep(500);
        setStageIndex(stageIndex + 1);
        alert(JSON.stringify(values, undefined, 2));
    };

    const onSubmitB = async (values: IStageB,
        form: FormApi<IStageB>,
        callback?: (errors?: SubmissionErrors) => void) => {
        await sleep(500);
        alert(JSON.stringify(values, undefined, 2));
    };

    const onSubmitC = async (values: IStageC,
        form: FormApi<IStageC>,
        callback?: (errors?: SubmissionErrors) => void) => {
        await sleep(500);
        alert(JSON.stringify(values, undefined, 2));
    };


    return (
        <>
            <WizardContext.Provider value={data}>
                <h3>Wizard</h3>
                <Switch>
                    <Route path={`${match.path}/1`} render={
                        (props) => <StageA {...props} submit={onSubmitA} />
                    } />
                    <Route path={`${match.path}/2`} render={
                        (props) => <StageB {...props} submit={onSubmitB} />
                    } />
                    <Route path={`${match.path}/3`} render={
                        (props) => <StageC {...props} submit={onSubmitC} />
                    } />
                    <Route render={
                        (props) => <Stage0 {...props} submit={onSubmit0} options={['a', 'b', 'c', 'd']} />
                    } />
                </Switch>
                <p>
                    <strong>Match Props: </strong>
                    <code>{JSON.stringify(match, null, 2)}</code>
                </p>
                <p>
                    <strong>Location Props: </strong>
                    <code>{JSON.stringify(location, null, 2)}</code>
                </p>
                <p>
                    <strong>History Props: </strong>
                    <code>{JSON.stringify(history, null, 2)}</code>
                </p>
            </WizardContext.Provider>
        </>
    );
}

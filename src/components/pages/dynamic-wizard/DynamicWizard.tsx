
import * as React from 'react';
import ILinkToProps from '../../routing/ILinkToProps';
import useSideBar from '../../contexts/useSideBar'
import WizardContext from './context/WizardContext';
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

    const [data, setData] = useState(new WizardState())
    const [done, setDone] = useState(false)
    const { match, history, location } = useRouter();

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

    const moveNext = async (values: string[]) => {
        await sleep(500);
        if (values.length === 0) {
            setDone(true);
            history.push(match.url);
            return;
        }
        if (values.length === 1) {
            const head = values[0];
            history.push(`${match.url}/${head}`);
        } else {
            // https://stackoverflow.com/questions/35361225/javascript-head-and-tail-on-array-without-mutation
            var head = values[0];
            var tail = values.slice(1);
            setData({ ...data, activeStages: tail });
            if (head !== undefined) {
                history.push(`${match.url}/${head}`);
            }
        }
    }

    type DataType0 = { activeStages: string[] };
    const onSubmit0 = async (content: DataType0,
        form: FormApi<DataType0>,
        callback?: (errors?: SubmissionErrors) => void) => {
        // setData({
        //     ...data,
        //     stages: {
        //         ...data.stages,
        //         stageA: { ...data.stages.stageA, firstName: 'BNAYA' }
        //     }
        // });
        const values: string[] = content.activeStages;
        await moveNext(values);
    };

    const onSubmitA = async (values: IStageA,
        form: FormApi<IStageA>,
        callback?: (errors?: SubmissionErrors) => void) => {
        setData({
            ...data,
            stages: {
                ...data.stages,
                stageA: { ...values }
            }
        });
        await moveNext(data.activeStages);
    };

    const onSubmitB = async (values: IStageB,
        form: FormApi<IStageB>,
        callback?: (errors?: SubmissionErrors) => void) => {
        setData({
            ...data,
            stages: {
                ...data.stages,
                stageB: { ...values }
            }
        });
        await moveNext(data.activeStages);
    };

    const onSubmitC = async (values: IStageC,
        form: FormApi<IStageC>,
        callback?: (errors?: SubmissionErrors) => void) => {
        setData({
            ...data,
            stages: {
                ...data.stages,
                stageC: { ...values }
            }
        });
        await moveNext(data.activeStages);
    };

    const summary: React.ReactNode = done ? (
        <p>
            <strong>Data: </strong>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </p>
    ) : undefined;

    return (
        <>
            <WizardContext.Provider value={data}>
                <h3>Wizard</h3>
                <Switch>
                    <Route path={`${match.path}/a`} render={
                        (routeProps) => <StageA {...routeProps} submit={onSubmitA} />
                    } />
                    <Route path={`${match.path}/b`} render={
                        (routeProps) => <StageB {...routeProps} submit={onSubmitB} />
                    } />
                    <Route path={`${match.path}/c`} render={
                        (routeProps) => <StageC {...routeProps} submit={onSubmitC} />
                    } />
                    <Route render={
                        (routeProps) => <Stage0 {...routeProps} submit={onSubmit0} options={['a', 'b', 'c']} />
                    } />
                </Switch>
                <p>Location is {location.pathname}</p>
                {/* <p>
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
                </p> */}
                {summary}
            </WizardContext.Provider>
        </>
    );
}

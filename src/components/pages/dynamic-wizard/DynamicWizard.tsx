
import * as React from 'react';
import { useReducer, useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { FormApi, SubmissionErrors } from 'final-form';
import RenderCount from '../../utils/RenderCount'
import ILinkToProps from '../../routing/ILinkToProps';
import useSideBar from '../../contexts/useSideBar'
import WizardContext from './context/WizardContext';
import WizardState from './state/WizardState';
import IWizardState from './state/IWizardState';
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


export interface IDynamicWizardProps {
}

export default function DynamicWizard(props: IDynamicWizardProps) {
    const navigation: ILinkToProps[] = [
        { to: "/", text: "Home", icon: <HomeIcon /> },
        { to: "/users", text: "Users", icon: <UserIcon /> },
        { to: "/nest", text: "Nesting", icon: <NestIcon /> },
        { to: "/about", text: "About", icon: <AboutIcon /> },
    ];
    useSideBar(navigation);
    const { match, history, location } = useRouter();

    enum ReducerTypes { stage0, stageA, stageB, stageC }
    type Action =
        | { type: ReducerTypes.stage0; values: string[]; }
        | { type: ReducerTypes.stageA; values: IStageA; }
        | { type: ReducerTypes.stageB; values: IStageB; }
        | { type: ReducerTypes.stageC; values: IStageC; }

    const calcNextStage = (activeStages: string[], index: number): string => {
        if (activeStages.length <= index) {
            return "/";
        }
        return activeStages[index];
    }

    const [data, dispatch] = useReducer(
        (state: IWizardState, action: Action): IWizardState => {
            switch (action.type) {
                case ReducerTypes.stage0: {
                    return {
                        ...state,
                        activeStages: action.values,
                        stageIndex: 0,
                        nextStage: calcNextStage(action.values, 0)
                    };
                }
                case ReducerTypes.stageA: {
                    return {
                        ...state,
                        stages: {
                            ...state.stages,
                            stageA: { ...action.values }
                        },
                        stageIndex: state.stageIndex + 1,
                        nextStage: calcNextStage(state.activeStages, state.stageIndex + 1)
                    };
                }
                case ReducerTypes.stageB: {
                    return {
                        ...state,
                        stages: {
                            ...state.stages,
                            stageB: { ...action.values }
                        },
                        stageIndex: state.stageIndex + 1,
                        nextStage: calcNextStage(state.activeStages, state.stageIndex + 1)
                    };
                }
                case ReducerTypes.stageC: {
                    return {
                        ...state,
                        stages: {
                            ...state.stages,
                            stageC: { ...action.values }
                        },
                        stageIndex: state.stageIndex + 1,
                        nextStage: calcNextStage(state.activeStages, state.stageIndex + 1)
                    };
                }
                default:
                    throw new Error();
            }
        }, new WizardState()
    );

    // computed value
    const done: boolean = useMemo(() => data.activeStages.length <= data.stageIndex, [data]);
    const lastStage: boolean = useMemo(() => data.activeStages.length - 1 <= data.stageIndex, [data]);

    let url: string = match.url;
    if (!url.endsWith('/')) {
        url = `${url}/`;
    }
    if (data.nextStage == "/") {
        if (match.url != location.pathname) {
            history.push(match.url);
        }
    } else if (!location.pathname.endsWith(data.nextStage)) {
        console.log(`# ${location.pathname} -> ${data.nextStage}`);
        history.push(`${url}${data.nextStage}`);
        return (<div>loading...</div>);
    }

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

    type DataType0 = { activeStages: string[] };
    const onSubmit0 = async (content: DataType0,
        form: FormApi<DataType0>,
        callback?: (errors?: SubmissionErrors) => void) => {
        await sleep(500);
        const values: string[] = content.activeStages;
        dispatch({ type: ReducerTypes.stage0, values: values });
    };

    const onSubmitA = async (values: IStageA,
        form: FormApi<IStageA>,
        callback?: (errors?: SubmissionErrors) => void) => {
        await sleep(500);
        dispatch({ type: ReducerTypes.stageA, values: values });
    };

    const onSubmitB = async (values: IStageB,
        form: FormApi<IStageB>,
        callback?: (errors?: SubmissionErrors) => void) => {
        await sleep(500);
        dispatch({ type: ReducerTypes.stageB, values: values });
    };

    const onSubmitC = async (values: IStageC,
        form: FormApi<IStageC>,
        callback?: (errors?: SubmissionErrors) => void) => {
        await sleep(500);
        dispatch({ type: ReducerTypes.stageC, values: values });
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
                        (routeProps) => <StageA {...routeProps} submit={onSubmitA} lastStage={lastStage} />
                    } />
                    <Route path={`${match.path}/b`} render={
                        (routeProps) => <StageB {...routeProps} submit={onSubmitB} lastStage={lastStage} />
                    } />
                    <Route path={`${match.path}/c`} render={
                        (routeProps) => <StageC {...routeProps} submit={onSubmitC} lastStage={lastStage} />
                    } />
                    <Route exact path={`${match.path}`} render={
                        (routeProps) => <Stage0 {...routeProps} submit={onSubmit0} options={['a', 'b', 'c']} lastStage={false} />
                    } />
                    <Redirect to={`${match.path}`} />
                </Switch>
                <RenderCount />
                <p>Location is {location.pathname}</p>
                {summary}
            </WizardContext.Provider>
        </>
    );
}

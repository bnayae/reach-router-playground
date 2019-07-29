// https://reactjs.org/docs/hooks-reference.html

import IStageA from './stages/IStageA'
import IStageB from './stages/IStageB'
import IStageC from './stages/IStageC'

export default interface IWizardState {
    stageIndex: number;
    activeStages: string[];
    stages: {
        stageA: IStageA;
        stageB: IStageB;
        stageC: IStageC;
    }
}

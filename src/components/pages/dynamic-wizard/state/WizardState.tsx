import IWizardState from "./IWizardState";

import IStageA from './stages/IStageA'
import IStageB from './stages/IStageB'
import IStageC from './stages/IStageC'

export default class WizardState implements IWizardState {
    stageIndex: number = -1;
    activeStages: string[] = [];
    stages: {
        stageA: IStageA;
        stageB: IStageB;
        stageC: IStageC;
    } = {
            stageA: { firstName: '', surName: '' },
            stageB: { option1: false, option2: false, option3: false, option4: false },
            stageC: { phone: '', email: '' }
        };
    nextStage: string = '';
}
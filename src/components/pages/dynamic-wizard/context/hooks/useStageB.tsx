import { useContext } from "react";
import IWizardState from "../../state/IWizardState";
import WizardContext from '../WizardContext';
import IStageB from '../../state/stages/IStageB';

export default function useStageB(): IStageB {
    const state: IWizardState = useContext<IWizardState>(WizardContext);
    return state.stages.stageB;
}
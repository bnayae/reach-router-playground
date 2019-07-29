import { useContext } from "react";
import IWizardState from "../../state/IWizardState";
import WizardContext from '../WizardContext';
import IStageC from '../../state/stages/IStageC';

export default function useStageC(): IStageC {
    const state: IWizardState = useContext<IWizardState>(WizardContext);
    return state.stages.stageC;
}
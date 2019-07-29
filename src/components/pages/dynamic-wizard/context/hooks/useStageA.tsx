import { useContext } from "react";
import IWizardState from "../../state/IWizardState";
import WizardContext from '../WizardContext';
import IStageA from '../../state/stages/IStageA';

export default function useStageA(): IStageA {
    const state: IWizardState = useContext<IWizardState>(WizardContext);
    return state.stages.stageA;
}
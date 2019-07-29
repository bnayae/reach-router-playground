import { useContext } from "react";
import IWizardState from "../../state/IWizardState";
import WizardContext from '../WizardContext';

export default function useStage0(): string[] {
    const state: IWizardState = useContext<IWizardState>(WizardContext);
    return state.activeStages;
}
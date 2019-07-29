import { useContext } from "react";
import IWizardState from "../../state/IWizardState";
import WizardContext from '../WizardContext';

type DataType = { activeStages: string[] };

export default function useStage0(): DataType {
    const state: IWizardState = useContext<IWizardState>(WizardContext);
    return { activeStages: state.activeStages };
}
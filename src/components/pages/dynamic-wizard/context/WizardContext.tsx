// https://reactjs.org/docs/hooks-reference.html

import React from "react";
import IWizardState from "../state/IWizardState";
import WizardState from "../state/WizardState";

const state = new WizardState();
const WizardContext = React.createContext<IWizardState>(state);

export default WizardContext;

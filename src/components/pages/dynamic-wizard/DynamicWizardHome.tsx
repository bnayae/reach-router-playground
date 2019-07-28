import * as React from 'react';

export interface IDynamicWizardHomeProps {
    options: { index: number, title: string }
}

export default function DynamicWizardHome(props: IDynamicWizardHomeProps) {
    return (
        <>
            <h3>Wizard</h3>
        </>
    );
}

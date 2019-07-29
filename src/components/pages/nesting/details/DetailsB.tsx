import * as React from 'react';
import IDetailsProps from '../IDetailsProps';


export function DetailsB(props: IDetailsProps) {
    return (
        <>
            <h4 style={{ color: "blue" }}>Details B</h4>
            <p>Custom data = {props.stageKey}</p>
        </>
    );
}

import * as React from 'react';
import IDetailsProps from '../IDetailsProps';


export function DetailsA(props: IDetailsProps) {
    return (
        <>
            <h4>Details A</h4>
            <p>Custom data = {props.stageKey}</p>
        </>
    );
}

import * as React from 'react';
import { FieldRenderProps, Field } from "react-final-form";
import { StageTemplate } from './common/StageTemplate';
import IStageTemplateProps from './common/IStageTemplateProps';
import IStageC from '../state/stages/IStageC';
import useStageC from '../context/hooks/useStageC';
import IStageProps from './common/IStageProps';

export interface IStageCProps extends IStageProps<IStageC> {
}

const Stage = (props: IStageTemplateProps<IStageC>): JSX.Element => StageTemplate<IStageC>(props);

export default function StageC(props: IStageCProps) {
    return (
        <Stage useData={useStageC} submit={props.submit} lastStage={props.lastStage}>
            <>
                <Field name="phone">
                    {({ meta, input }: FieldRenderProps<string, HTMLElement>) => (
                        <>
                            <label>{input.name}</label>
                            <input {...input} />
                            {meta.invalid && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                        </>)
                    }
                </Field>
                <br />
                <Field name="email">
                    {({ meta, input }: FieldRenderProps<string, HTMLElement>) => (
                        <>
                            <label>{input.name}</label>
                            <input {...input} />
                            {meta.invalid && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                        </>)
                    }
                </Field>
            </>
        </Stage >
    );
}


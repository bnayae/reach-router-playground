import * as React from 'react';
import { FieldRenderProps, Field } from "react-final-form";
import { StageTemplate } from './common/StageTemplate';
import IStageTemplateProps from './common/IStageTemplateProps';
import IStageB from '../state/stages/IStageB';
import IStageProps from './common/IStageProps';

export interface IStageBProps extends IStageProps<IStageB> {
}

const Stage = (props: IStageTemplateProps<IStageB>): JSX.Element => StageTemplate<IStageB>(props);

export default function StageB(props: IStageBProps) {
    return (
        <Stage data={props.data} submit={props.submit} lastStage={props.lastStage}>
            <>
                <Field name="option1" type="checkbox">
                    {({ meta, input }: FieldRenderProps<string, HTMLElement>) => (
                        <>
                            <label>{input.name}</label>
                            <input {...input} />
                            {meta.invalid && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                        </>)
                    }
                </Field>
                <br />
                <Field name="option2" type="checkbox">
                    {({ meta, input }: FieldRenderProps<string, HTMLElement>) => (
                        <>
                            <label>{input.name}</label>
                            <input {...input} />
                            {meta.invalid && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                        </>)
                    }
                </Field>
                <br />
                <Field name="option3" type="checkbox">
                    {({ meta, input }: FieldRenderProps<string, HTMLElement>) => (
                        <>
                            <label>{input.name}</label>
                            <input {...input} />
                            {meta.invalid && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                        </>)
                    }
                </Field>
                <br />
                <Field name="option4" type="checkbox">
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


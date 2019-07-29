import * as React from 'react';
import { FieldRenderProps, Field } from "react-final-form";
import { StageTemplate } from './common/StageTemplate';
import IStageTemplateProps from './common/IStageTemplateProps';
import IStageA from '../state/stages/IStageA';
import useStageA from '../context/hooks/useStageA';
import IStageProps from './common/IStageProps';

export interface IStageAProps extends IStageProps<IStageA> {
}

const Stage = (props: IStageTemplateProps<IStageA>): JSX.Element => StageTemplate<IStageA>(props);

export default function StageA(props: IStageAProps) {
    return (
        <Stage useData={useStageA} submit={props.submit}>
            <>
                <Field name="firstName">
                    {({ meta, input }: FieldRenderProps<string, HTMLElement>) => (
                        <>
                            <label>{input.name}</label>
                            <input {...input} />
                            {meta.invalid && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                        </>)
                    }
                </Field>
                <br />
                <Field name="surName">
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


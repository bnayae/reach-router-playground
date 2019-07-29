import * as React from 'react';
import { FieldRenderProps, Field } from "react-final-form";
import { StageTemplate } from './common/form-template/StageTemplate';
import IStageTemplateProps from './common/IStageTemplateProps';
import useStage0 from '../context/hooks/useStage0';
import IStageProps from './common/IStageProps';

export interface Stage0Props extends IStageProps<string[]> {
    options: string[];
}

const Stage = (props: IStageTemplateProps<string[]>): JSX.Element => StageTemplate<string[]>(props);

export default function Stage0(props: Stage0Props) {
    const { options } = props;
    return (
        <Stage useData={useStage0} submit={props.submit}>
            <>
                {options.map((item: string, index: number) =>
                    <>
                        <Field name="activeStages" type="checkbox" value={item} >
                            {({ meta, input }: FieldRenderProps<string, HTMLElement>) => (
                                <>
                                    <label>{input.name}</label>
                                    <input {...input} />
                                    {meta.invalid && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                                </>)
                            }
                        </Field>
                        <br />
                    </>
                )}
            </>
        </Stage >
    );
}


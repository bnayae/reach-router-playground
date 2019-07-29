import * as React from 'react';
import { FieldRenderProps, Field } from "react-final-form";
import { StageTemplate } from './common/StageTemplate';
import IStageTemplateProps from './common/IStageTemplateProps';
import useStage0 from '../context/hooks/useStage0';
import IStageProps from './common/IStageProps';

type DataType = { activeStages: string[] };

export interface Stage0Props extends IStageProps<DataType> {
    options: string[];
}

const Stage = (props: IStageTemplateProps<DataType>): JSX.Element => StageTemplate<DataType>(props);

export default function Stage0(props: Stage0Props) {
    const { options } = props;
    return (
        <Stage key="stage0" useData={useStage0} submit={props.submit} lastStage={props.lastStage}>
            <>
                {options.map((item: string, index: number) =>
                    <div key={item}>
                        <Field key={item} name="activeStages" type="checkbox" value={item} >
                            {({ meta, input }: FieldRenderProps<string, HTMLElement>) => (
                                <>
                                    <label>{item}</label>
                                    <input {...input} />
                                    {meta.invalid && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                                </>)
                            }
                        </Field>
                        <br />
                    </div>
                )}
            </>
        </Stage >
    );
}


import * as React from 'react';
import { FieldArray, FieldArrayRenderProps } from 'react-final-form-arrays'
import { StageTemplate } from './common/StageTemplate';
import IStageTemplateProps from './common/IStageTemplateProps';
import IStageProps from './common/IStageProps';

type DataType = { activeStages: string[] };

export interface Stage0Props extends IStageProps<DataType> {
    options: string[];
}

const Stage = (props: IStageTemplateProps<DataType>): JSX.Element => StageTemplate<DataType>(props);

export default function Stage0Array(props: Stage0Props) {
    const { options } = props;
    return (
        <Stage key="Stage0Array" data={props.data} submit={props.submit} lastStage={props.lastStage}>
            <FieldArray key="activeStages" name="activeStages">
                {({ fields, meta }: FieldArrayRenderProps<string, HTMLElement>) => {
                    return (
                        <> {
                            options.map((item: string, index: number) => {
                                const itemIndex: number = fields.value ? fields.value.indexOf(item) : -1
                                const isChecked = itemIndex === -1 ? false : true;
                                return (<div key={item}>
                                    <>
                                        <label>{item}</label>
                                        <input type="checkbox" checked={isChecked} onChange={e => {
                                            if (e.target.checked) {
                                                fields.push(item);
                                            } else {
                                                fields.remove(itemIndex);
                                            }
                                        }} />
                                    </>
                                    <br />
                                </div>)
                            })}
                        </>)
                }}
            </FieldArray>
        </Stage >
    );
}


import * as React from 'react';
import { Form, FormRenderProps, FormSpy } from "react-final-form";
import IStageTemplateProps from './IStageTemplateProps';
import arrayMutators from 'final-form-arrays'

export function StageTemplate<T>(props: IStageTemplateProps<T>) {
    return (
        <Form onSubmit={props.submit} initialValues={props.data} subscription={{ submitting: true }}
            mutators={{
                // potentially other mutators could be merged here
                ...arrayMutators // used by <FieldArray>
            }}>
            {(formProps: FormRenderProps<T>) => {
                const { handleSubmit, submitting } = formProps;
                const children = props.children;
                const buttonName: string = props.lastStage ? "Send" : "Next";

                return (
                    <>
                        <form onSubmit={handleSubmit}>
                            <>
                                {children}
                                <br />
                                <button type="submit" disabled={submitting}>{buttonName}</button>
                                <br />
                                <h4>Values</h4>
                                <FormSpy subscription={{ values: true }}>
                                    {({ values }) =>
                                        <pre style={{ textAlign: "left" }}>{JSON.stringify(values, undefined, 2)}</pre>
                                    }
                                </FormSpy>
                            </>
                        </form>
                    </>)
            }}
        </Form>
    );
}

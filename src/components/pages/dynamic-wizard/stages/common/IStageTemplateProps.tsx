import * as React from 'react';
import { FormApi, SubmissionErrors } from 'final-form';

export default interface IStageTemplateProps<T> {
    submit: (values: T,
        form: FormApi<T>,
        callback?: (errors?: SubmissionErrors) => void)
        => void;
    data: T;
    lastStage: boolean;
    children?: React.ReactNode;
}

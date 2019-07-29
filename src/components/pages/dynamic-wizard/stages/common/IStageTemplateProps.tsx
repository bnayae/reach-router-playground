import * as React from 'react';
import { FormApi, SubmissionErrors } from 'final-form';

export default interface IStageTemplateProps<T> {
    submit: (values: T,
        form: FormApi<T>,
        callback?: (errors?: SubmissionErrors) => void)
        => void;
    useData: () => T;
    children?: React.ReactNode;
}

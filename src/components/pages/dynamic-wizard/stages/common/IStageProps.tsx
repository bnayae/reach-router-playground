import * as React from 'react';
import { FormApi, SubmissionErrors } from 'final-form';

export default interface IStageProps<T> {
    submit: (values: T,
        form: FormApi<T>,
        callback?: (errors?: SubmissionErrors) => void)
        => void;
    // children: React.ReactNode;
}

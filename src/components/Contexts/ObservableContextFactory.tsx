// https://reactjs.org/docs/hooks-reference.html
// https://codesandbox.io/s/yw5zkyvx4j?from-embed
// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
// https://daveceddia.com/usecontext-hook/

import React, { Context } from "react";
import { BehaviorSubject } from 'rxjs'

export default class ObservableContextFactory<T> {
    public readonly Context: Context<BehaviorSubject<T>>;
    public readonly Provider: (children: React.ReactNode) => JSX.Element;

    constructor(initialValue: T) {
        const initValue: BehaviorSubject<T> = new BehaviorSubject<T>(initialValue);
        this.Context = React.createContext<BehaviorSubject<T>>(initValue);

        this.Provider = function NumericObservableContext(children: React.ReactNode) {
            const context = this.Context;

            return (
                <context.Provider value={initValue}>
                    {children}
                </context.Provider>
            );
        }
    }
}

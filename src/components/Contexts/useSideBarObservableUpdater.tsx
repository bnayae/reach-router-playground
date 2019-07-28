// credit: https://github.com/LeetCode-OpenSource/rxjs-hooks/blob/master/src/use-observable.ts

import { useContext, useState, useEffect } from 'react'

import { BehaviorSubject } from 'rxjs'
import { Context } from './SideBarObservableContext'
import { Subscription } from 'rxjs';
import ILinkToProps from '../routing/ILinkToProps';

export default function useSideBarObservableUpdater(): { value: ILinkToProps[], setValue: (value: ILinkToProps[]) => void } {
    const context: BehaviorSubject<ILinkToProps[]> = useContext<BehaviorSubject<ILinkToProps[]>>(Context)
    const [state, setState] = useState<ILinkToProps[]>(context.value);

    useEffect(() => {
        const subscription: Subscription = context.subscribe(v => setState(v));
        return () => subscription.unsubscribe();
    }, [context]);

    console.log(`updater state = ${context.value}`)

    const setValue = (value: ILinkToProps[]) => {
        console.log(`updater: ${value}`);
        context.next(value);
    };

    return { value: state, setValue: setValue };
}
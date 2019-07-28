// credit: https://github.com/LeetCode-OpenSource/rxjs-hooks/blob/master/src/use-observable.ts

import { useState, useEffect, useContext } from 'react'

import { BehaviorSubject, Subscription } from 'rxjs'
import { Context } from './SideBarObservableContext'
import ILinkToProps from '../routing/ILinkToProps';

export default function useSideBarObservable(): ILinkToProps[] {
    const context: BehaviorSubject<ILinkToProps[]> = useContext<BehaviorSubject<ILinkToProps[]>>(Context)
    const [state, setState] = useState(context.value);
    console.log(`state = ${state}, context = ${context.value}`);
    useEffect(() => {
        const subscription: Subscription =
            context.subscribe(v => {
                setState(v);
            });
        return () => subscription.unsubscribe();
    }, [context])

    return state
}
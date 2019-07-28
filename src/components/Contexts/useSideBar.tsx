// credit: https://github.com/LeetCode-OpenSource/rxjs-hooks/blob/master/src/use-observable.ts

// TODO: get the list and do React.useEffect inside


import { useContext, useEffect } from 'react'

import { BehaviorSubject } from 'rxjs'
import { Context } from './SideBarObservableContext'
import ILinkToProps from '../routing/ILinkToProps';

export default function useSideBar(navigation: ILinkToProps[]) {
    const context: BehaviorSubject<ILinkToProps[]> = useContext<BehaviorSubject<ILinkToProps[]>>(Context)

    useEffect(() => {
        context.next(navigation);
        return () => context.next([]);;
    }, [context, navigation]);
}
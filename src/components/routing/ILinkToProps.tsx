import * as React from 'react';
import { LinkProps } from "react-router-dom";

export default interface ILinkToProps<T = any> extends LinkProps {
    icon?: React.ReactElement;
    text: string;
    props?: T;
}


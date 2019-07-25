import * as React from 'react';
import { LinkProps } from "react-router-dom";

export default interface ILinkToProps extends LinkProps {
    icon?: React.ReactElement;
    text: string;
}


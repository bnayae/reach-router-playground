import * as React from "react";

import ILinkToProps from "../routing/ILinkToProps";
import useSideBar from "../Contexts/useSideBar";

import UserIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/Announcement";
import WizardIcon from "@material-ui/icons/School";
import NestIcon from "@material-ui/icons/ArtTrack";

export interface INoMatchProps {}

export default function NoMatch(props: INoMatchProps) {
  const navigation: ILinkToProps[] = [
    { to: "/", text: "Home", icon: <HomeIcon /> },
    { to: "/users", text: "Users", icon: <UserIcon /> },
    { to: "/wizard", text: "Wizard", icon: <WizardIcon /> },
    { to: "/nest", text: "Nesting", icon: <NestIcon /> },
    { to: "/about", text: "About", icon: <AboutIcon /> },
  ];
  useSideBar(navigation);

  return (
    <div>
      <h5>Under construction</h5>
    </div>
  );
}

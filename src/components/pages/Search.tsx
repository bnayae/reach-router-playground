import * as React from "react";
import ILinkToProps from "../routing/ILinkToProps";
import useRouter from "../routing/useRouter";
import useSideBar from "../Contexts/useSideBar";

import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/Announcement";
import UserIcon from "@material-ui/icons/Group";
import WizardIcon from "@material-ui/icons/School";
import NestIcon from "@material-ui/icons/ArtTrack";

export interface ISearchProps {}

export default function Search(props: ISearchProps) {
  const navigation: ILinkToProps[] = [
    { to: "/", text: "Home", icon: <HomeIcon /> },
    { to: "/users", text: "Users", icon: <UserIcon /> },
    { to: "/wizard", text: "Wizard", icon: <WizardIcon /> },
    { to: "/nest", text: "Nesting", icon: <NestIcon /> },
    { to: "/about", text: "About", icon: <AboutIcon /> },
  ];
  useSideBar(navigation);

  const { location, match } = useRouter<{ id: string }, any, any>();

  return (
    <div>
      <h4>Search</h4>

      <p>current location = {location.pathname}</p>
      <p>Query Params is {location.search}</p>
      <p>Parsed Query Params is {location.search.substr(3)}</p>
      <p>
        <strong>Match Props: </strong>
        <code>{JSON.stringify(match, null, 2)}</code>
      </p>
      <p>
        <strong>Location Props: </strong>
        <code>{JSON.stringify(location, null, 2)}</code>
      </p>
    </div>
  );
}

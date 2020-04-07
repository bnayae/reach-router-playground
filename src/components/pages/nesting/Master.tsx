// credit: nested route - https://reacttraining.com/react-router/web/example/basic

import * as React from "react";
import { Link, Switch, Route } from "react-router-dom";
import useRouter from "../../routing/useRouter";
import { DetailsA } from "./details/DetailsA";
import { DetailsB } from "./details/DetailsB";
import ILinkToProps from "../../routing/ILinkToProps";
import useSideBar from "../../Contexts/useSideBar";

import UserIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/Announcement";
import WizardIcon from "@material-ui/icons/School";

export interface IMasterProps {}

export default function Master(props: IMasterProps) {
  const { match, history } = useRouter();

  const navigation: ILinkToProps[] = [
    { to: "/", text: "Home", icon: <HomeIcon /> },
    { to: "/users", text: "Users", icon: <UserIcon /> },
    { to: "/wizard", text: "Wizard", icon: <WizardIcon /> },
    { to: "/about", text: "About", icon: <AboutIcon /> },
  ];
  useSideBar(navigation);

  return (
    <>
      <h3>Matser</h3>
      <p>this content belong to the master</p>
      <ul>
        <li>
          <Link to={`${match.url}/a`}>Stage A</Link>
        </li>
        <li>
          <Link to={`${match.url}/b`}>Stage B</Link>
        </li>
        <button
          type="button"
          onClick={(e) => {
            history.push(`${match.url}/c`);
          }}
        >
          Stage C
        </button>
      </ul>
      <Switch>
        <Route
          path={`${match.path}/a`}
          render={(props) => <DetailsA {...props} stageKey="Stage 1" />}
        />
        <Route
          path={`${match.path}/b`}
          render={(props) => <DetailsB {...props} stageKey="Stage 2" />}
        />
        <Route
          path={`${match.path}/c`}
          render={(props) => <DetailsA {...props} stageKey="Stage 3" />}
        />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a option.</h3>}
        />
        <Route render={() => <h3>Please select of the existing options.</h3>} />
      </Switch>
    </>
  );
}

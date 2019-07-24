// https://reactjs.org/docs/hooks-reference.html
// https://codesandbox.io/s/yw5zkyvx4j?from-embed
// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
// https://daveceddia.com/usecontext-hook/

import React from "react";

export interface ISideBarContext {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const SideBarContext = React.createContext<ISideBarContext>({ open: false, setOpen: o => {} });

export default SideBarContext;
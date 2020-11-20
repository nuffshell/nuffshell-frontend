import cx from "classnames";
import { Main, MainHeadline } from "./ui";
import React from "react";

function App() {
  return (
    <div className={cx("app", "bg-red-100")}>
      <Main>
        <MainHeadline>nuffshell</MainHeadline>
      </Main>
    </div>
  );
}

export default App;

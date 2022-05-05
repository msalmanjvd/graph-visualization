import React from "react";
import { RecoilRoot } from "recoil";

import { Footer } from "./components/common/Footer";
import Header from "./components/common/Header";
import { GraphScreen } from "./components/GraphScreen";

const App = (): React.ReactElement => {
  return (
    <div className="bg-violet-50">
      <RecoilRoot>
        <Header />
        <GraphScreen />
        <Footer />
      </RecoilRoot>
    </div>
  );
};

export default App;

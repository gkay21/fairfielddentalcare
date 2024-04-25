import { useState, useEffect } from "react";
import { scrollAnimation } from "../common/scrollAnims";
import { formInputs } from "../common/utilits";
import { navigation } from "../common/navigation";

import Footer from "./footers/Index";
import Header from "./headers/Index";
import useScreenSize from "../lib/useScreenSize";
import Toolbar from "./toolbar/Index";

const Layouts = ({ children, footer, footerBg, footerInst, extraClass }) => {
  useEffect(() => {
    scrollAnimation();
    navigation();
    formInputs();
  }, []);

  return (
    <div id="smooth-wrapper" className="mil-wrapper">
      <Header extraClass={extraClass} />

      <div id="swupMain" className="mil-main-transition">
        <div id="smooth-content" className="mil-content">
          {children}
        </div>
      </div>

      <Footer layout={footer} bg={footerBg} instagram={footerInst} />
      <Toolbar extraClass={extraClass} />
    </div>
  );
};
export default Layouts;

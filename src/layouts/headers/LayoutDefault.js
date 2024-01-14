import Link from "next/link";
import { useState } from "react";
import appData from "@data/app.json";

const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);

  const navItems = [];

  appData.header.menu.forEach((item, index) => {
    let s_class1 = "";

    if (item.children) {
      s_class1 = "mil-has-children";
    }
    let newobj = Object.assign({}, item, { classes: s_class1 });
    navItems.push(newobj);
  });

  return (
    <div
      className={`mil-top-panel mil-animated ${extraClass ? extraClass : ""}`}
    >
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="mil-logo mil-scale-down-trigger mil-accent-trigger">
            <img src={appData.header.logo.src} alt={appData.header.logo.alt} />
          </a>
        </Link>
        <div
          className={`mil-mobile-dropdown mil-menu-left ${
            toggle ? "mil-active" : ""
          }`}
        >
          <div id="swupTopbar" className="mil-top-bar-transition">
            <nav className="mil-dark-nav">
              <ul className="mil-inline-list mil-hidden-trigger">
                {navItems.map((item, key) => (
                  <li className={item.classes} key={`header-menu-item-${key}`}>
                    <Link href={item.link} className="mil-link">
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul>
                        {item.children.map((subitem, key) => (
                          <li key={`header-submenu-item-${key}`}>
                            <Link href={subitem.link} className="mil-link">
                              {subitem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ul className="mil-social mil-hidden-trigger">
            <div className="mil-mr-15-adapt">
              <Link
                href="https://www.centaurportal.com/d4w/org-1171/extended_search?randomNumber=21d8305c3ab5a1908e2cf0d54ebc8e33f8259c8b7c5ba501e345e8dce3e10a10&shortVer=true&sourceID="
                className="mil-button mil-button-md mil-button-dark mil-scale-down-trigger mil-accent-trigger"
                target="_blank"
              >
                Book Now
              </Link>
            </div>
            {appData.social.map((item, key) => (
              <li key={`header-social-item-${key}`}>
                <a href={item.link} title={item.title} target="_blank">
                  <i className={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile menu button */}
        <div
          className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <span />
        </div>
        {/* mobile menu button end */}
      </div>
    </div>
  );
};
export default DefaultHeader;

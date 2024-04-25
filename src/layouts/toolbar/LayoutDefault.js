import Link from "next/link";

const DefaultToolbar = ({ extraClass }) => {
  return (
    <div
      className={`mil-bottom-panel mil-animated ${
        extraClass ? extraClass : ""
      }`}
    >
      <div className="container">
        <Link
          href="https://www.centaurportal.com/d4w/org-1171/extended_search?randomNumber=21d8305c3ab5a1908e2cf0d54ebc8e33f8259c8b7c5ba501e345e8dce3e10a10&shortVer=true&sourceID="
          className="full-width book-button mil-button mil-button-md mil-button-dark mil-scale-down-trigger mil-accent-trigger"
          target="_blank"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};
export default DefaultToolbar;

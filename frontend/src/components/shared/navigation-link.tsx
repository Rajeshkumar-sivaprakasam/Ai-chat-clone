import { Link } from "react-router-dom";

type props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>;
};

const NavigationLink = (props: props) => {
  return (
    <>
      <Link
        to={props.to}
        className="nav-link"
        onClick={props.onClick}
        style={{ background: props.bg, color: props.textColor }}
      >
        {props.text}
      </Link>
    </>
  );
};

export default NavigationLink;

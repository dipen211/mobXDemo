import * as React from "react";
import { StyledLink } from "./StyledComponents/StyledLink";

export default class Header extends React.Component<IHeader> {
  render() {
    const { location } = this.props.props;
    return (
      <div>
        <StyledLink
          to="/formstate"
          active={location.pathname.match("/*/formstate")}
        >
          Note Manager
        </StyledLink>
        <hr />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
interface IHeader {
  title: string;
  props: any;
}

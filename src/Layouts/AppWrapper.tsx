import { NavLink, Typography } from "@imploy/common-components";
import { createStyles, ITheme, makeStyles } from "@imploy/common-themes";
import React from "react";
import { ReactNode } from "react";
import AppHeader from "./AppHeader";
import { ReactComponent as GlobalSvg } from "../media/Icons/global.svg";
import { ReactComponent as GiftSvg } from "../media/Icons/gift.svg";
import { ROUTE_LINKS } from "../Components/Routes";
interface IAppWrapper {
  children: ReactNode | ReactNode[];
}

const useStyles = makeStyles(({ animation, constants, palette }: ITheme) => {
  return createStyles({
    root: {},
    cta: {
      display: "block",
      maxWidth: 200,
      maxHeight: 200,
      position: "fixed",
      bottom: constants.generalUnit * 3,
      right: constants.generalUnit * 3,
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxWidth: 460,
      display: "flex",
      flexDirection: "column",
      padding: constants.generalUnit * 6,
      border: `1px solid ${palette.additional["gray"][7]}`,
      borderRadius: 4,
      color: palette.additional["gray"][8],
    },
    pageArea: {
      height: "100%",
      width: "100%",
      overflow: "hidden",
    },
    navTabs: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      transform: "translate(0,-100%)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: `0 ${constants.generalUnit}px`,

      "& > a": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: `${constants.generalUnit}px ${constants.generalUnit * 1.5}px`,
        border: `1px solid ${palette.additional["gray"][7]}`,
        textDecoration: "none",
        marginRight: constants.generalUnit,
        transitionDuraiton: `${animation.transform}ms`,
        color: palette.additional["gray"][8],
        "& svg": {
          transitionDuraiton: `${animation.transform}ms`,
          fill: palette.additional["gray"][8],
        },
        "&.active": {
          color: palette.additional["gray"][9],
          textDecoration: "underline",
          "& svg": {
            fill: palette.additional["geekblue"][5],
          },
        },
        "& > *:first-child": {
          marginRight: constants.generalUnit,
        },
      },
      "& svg": {
        height: 14,
        width: 14,
      },
    },
  });
});

const AppWrapper: React.FC<IAppWrapper> = ({ children }: IAppWrapper) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <AppHeader />
      <section className={classes.content}>
        <section className={classes.navTabs}>
          <NavLink activeClassName="active" to={ROUTE_LINKS.Transfer}>
            <GlobalSvg />
            <Typography>Transfer</Typography>
          </NavLink>
          <NavLink activeClassName="active" to={ROUTE_LINKS.Wrap}>
            <GiftSvg />
            <Typography>Wrap token</Typography>
          </NavLink>
        </section>
        <div className={classes.pageArea}>{children}</div>
      </section>

      {/* Put CTA here */}
      {/* <a className={classes.cta} rel="noopener noreferrer" target="_blank" href="#">
      </a> */}
    </section>
  );
};

export default AppWrapper;

import MainNavigation from "./main-navigation";
import { Fragment } from "react";

export default function Layout(props){
    return(
        <Fragment>
            <MainNavigation />
            <main>{props.children}</main>
        </Fragment>
    );
}
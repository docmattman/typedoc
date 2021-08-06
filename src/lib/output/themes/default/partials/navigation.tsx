import { wbr, classNames } from "../../lib";
import { DefaultThemeRenderContext } from "../DefaultThemeRenderContext";
import { createElement } from "../../../../utils";
import { NavigationItem } from "../../../models/NavigationItem";
export const navigation =
    ({ relativeURL, partials }: DefaultThemeRenderContext) =>
    (props: NavigationItem) =>
        Boolean(props.isVisible) &&
        (props.isLabel ? (
            <li class={"label " + props.cssClasses}>
                <span>{wbr(props.title)}</span>
            </li>
        ) : (
            <li class={classNames({ current: props.isInPath }) + " " + props.cssClasses}>
                <a href={relativeURL(props.url)}>{wbr(props.title)}</a>
                {!!props.isInPath && !!props.children && (
                    <ul>{props.children.map((item) => partials.navigation(item))}</ul>
                )}
            </li>
        ));
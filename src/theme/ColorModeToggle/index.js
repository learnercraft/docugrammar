// ColorModeToggle/index.js
import React from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { translate } from "@docusaurus/Translate";
import IconLightMode from "@theme/Icon/LightMode";
import IconDarkMode from "@theme/Icon/DarkMode";
import { CircleHalf } from 'react-bootstrap-icons';
import styles from "./styles.module.css";

function ColorModeToggle({ className, buttonClassName, value, onClick }) {
    const isBrowser = useIsBrowser();

    const title = translate(
        {
            message: "Switch between dark, light, and auto mode (currently {mode})",
            id: "theme.colorToggle.ariaLabel",
            description: "The ARIA label for the navbar color mode toggle",
        },
        {
            mode:
                value === "dark"
                    ? translate({
                          message: "dark mode",
                          id: "theme.colorToggle.ariaLabel.mode.dark",
                          description: "The name for the dark color mode",
                      })
                    : value === "light"
                    ? translate({
                          message: "light mode",
                          id: "theme.colorToggle.ariaLabel.mode.light",
                          description: "The name for the light color mode",
                      })
                    : translate({
                          message: "auto mode",
                          id: "theme.colorToggle.ariaLabel.mode.auto",
                          description: "The name for the auto color mode",
                      }),
        }
    );

    const renderIcon = () => {
        if (value === "dark") return <IconDarkMode className={clsx(styles.toggleIcon, styles.darkToggleIcon)} />;
        if (value === "light") return <IconLightMode className={clsx(styles.toggleIcon, styles.lightToggleIcon)} />;
        return <CircleHalf className={clsx(styles.toggleIcon, styles.autoToggleIcon)} />;
    };

    return (
        <div className={clsx(styles.toggle, className)}>
            <button
                className={clsx(
                    "clean-btn",
                    styles.toggleButton,
                    !isBrowser && styles.toggleButtonDisabled,
                    buttonClassName
                )}
                type="button"
                onClick={onClick}
                disabled={!isBrowser}
                title={title}
                aria-label={title}
                aria-live="polite">
                {renderIcon()}
            </button>
        </div>
    );
}

export default React.memo(ColorModeToggle);

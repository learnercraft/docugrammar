import React, { useEffect, useState } from "react";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import ColorModeToggle from "@theme/ColorModeToggle";
import styles from "./styles.module.css";
import useIsBrowser from "@docusaurus/useIsBrowser";

const THEME_SETTING_KEY = "themeSetting";

export default function NavbarColorModeToggle({ className }) {
    const isBrowser = useIsBrowser();
    const navbarStyle = useThemeConfig().navbar.style;
    const disabled = useThemeConfig().colorMode.disableSwitch;
    const { setColorMode } = useColorMode();
    const [mode, setMode] = useState("light");

    useEffect(() => {
        if (isBrowser) {
            const storedMode = localStorage.getItem(THEME_SETTING_KEY) || "light";
            setMode(storedMode);
            applyThemeSetting(storedMode);
        }
    }, [isBrowser]);

    const applyThemeSetting = (themeSetting) => {
        let finalTheme;

        if (themeSetting === "auto") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            finalTheme = prefersDark ? "dark" : "light";
        } else {
            finalTheme = themeSetting;
        }

        setColorMode(finalTheme);
    };

    useEffect(() => {
        if (!isBrowser) return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = () => {
            if (mode === "auto") {
                const systemPreference = mediaQuery.matches ? "dark" : "light";
                applyThemeSetting(systemPreference);
            }
        };

        handleChange(); // Apply the initial theme based on mode and system preference

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [mode, isBrowser]);

    useEffect(() => {
        if (isBrowser) {
            applyThemeSetting(mode);
            localStorage.setItem(THEME_SETTING_KEY, mode);
        }
    }, [mode, isBrowser]);

    if (disabled) {
        return null;
    }

    const handleClick = () => {
        const newValue = mode === "dark" ? "light" : mode === "light" ? "auto" : "dark";
        setMode(newValue);
    };

    return (
        <ColorModeToggle
            className={className}
            buttonClassName={navbarStyle === "dark" ? styles.darkNavbarColorModeToggle : undefined}
            value={mode}
            onClick={handleClick}
        />
    );
}

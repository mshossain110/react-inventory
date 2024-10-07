import useColorMode from "@/hooks/useColorMode";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import {Switch} from "@nextui-org/react";
import { useDarkMode } from '@reactuses/core';
import { ChangeEvent } from "react";

const DarkModeSwitcher = () => {
    const [theme, toggleDark] = useDarkMode({
        classNameDark: "dark",
        classNameLight: "light",
        defaultValue: false,
    })

    const setColorModeChange = (e:ChangeEvent<HTMLInputElement>) => {
        toggleDark()
    };

    return (
        <li>
            <Switch
                size="lg"
                startContent={<SunIcon />}
                endContent={<MoonIcon />}
                isSelected={!!theme}
                onChange={setColorModeChange}
            />
        </li>
    );
};

export default DarkModeSwitcher;

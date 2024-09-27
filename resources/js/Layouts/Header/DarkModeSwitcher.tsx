import useColorMode from "@/hooks/useColorMode";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import {Switch} from "@nextui-org/react";
import { ChangeEvent } from "react";

const DarkModeSwitcher = () => {
    const [colorMode, setColorMode] = useColorMode();


    const setColorModeChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        let mod = e.target.checked ? 'dark' : 'light';
        setColorMode(mod)
    };

    return (
        <li>
            <Switch
                size="lg"
                startContent={<SunIcon />}
                endContent={<MoonIcon />}
                onChange={setColorModeChange}
            />
        </li>
    );
};

export default DarkModeSwitcher;

import { useAtom } from "jotai";
import { HiMoon, HiSun } from "react-icons/hi";
import { themeAtom } from "../store/theme";

const ToggleTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <div
      onClick={() => {
        setTheme(!theme);
      }}
      className={`
			flex items-center justify-center w-12 h-12 shadow-sm bg-gray-50 dark:bg-gray-500 cursor-pointer rounded-full transition-colors group`}
    >
      {theme ? (
        <HiMoon className="text-white text-3xl ease-in group-hover:animate-pulse" />
      ) : (
        <HiSun className="text-yellow-400 text-3xl ease-in group-hover:animate-pulse" />
      )}
    </div>
  );
};

export default ToggleTheme;

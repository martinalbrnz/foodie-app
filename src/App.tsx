import { useAtomValue } from "jotai";
import { RouterProvider } from "react-router-dom";
import ToggleTheme from "./app/components/ToggleTheme";
import Sidenav from "./app/components/layout/Sidenav";
import { router } from "./app/routes/router";
import { themeAtom } from "./app/store/theme";

const App = () => {
  const theme = useAtomValue(themeAtom);
  return (
    <div className={`flex h-screen w-screen ${theme ? "dark" : ""}`}>
      <Sidenav />
      <main className="flex justify-center h-full flex-grow-[1] overflow-y-auto bg-gray-100 dark:bg-gray-900 custom-scrollbar">
        <div className="w-full max-w-7xl">
          <RouterProvider router={router} />
          <div className="absolute bottom-4 right-4">
            <ToggleTheme />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

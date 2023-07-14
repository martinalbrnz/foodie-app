import { useAtomValue } from "jotai";
import { userAtom } from "../../store/user";

const Sidenav = () => {
  const user = useAtomValue(userAtom);

  if (user) {
    return (
      <nav className="flex flex-col flex-1 abolute top-0 left-0 h-screen">
        <div className="flex gap-2 bg-orange-400">
          <div className="bg-gray-300 rounded-full h-12 w-12">
            <img src="" alt="" />
          </div>
          <span>Bienvenido {user.name}!</span>
        </div>
        <div className="flex flex-col gap-2">
          <a href="login">Login</a>
          <a href="register">Register</a>
        </div>
      </nav>
    );
  }
};

export default Sidenav;

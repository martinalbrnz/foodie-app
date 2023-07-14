import { useSetAtom } from "jotai";
import { ChangeEvent, useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import Input from "src/app/components/shared/Input";
import { userAtom } from "src/app/store/user";

interface LoginDTO {
  email: string;
  password: string;
}

const LoginView = () => {
  const setUser = useSetAtom(userAtom);
  const [showPass, setShowPass] = useState<boolean>();
  const [userLogin, setUserLogin] = useState<LoginDTO>({
    email: "",
    password: "",
  });

  const handleUserLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  const login = () => {
    fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    }).then((json) => {
      console.log(json);
    });
  };

  return (
    <div className="grid items-center justify-center h-full">
      <div className="grid gap-4 p-4 bg-gray-600">
        <h1>¡Bienvenido!</h1>
        <form className="flex flex-col gap-2">
          <Input
            type="text"
            name="email"
            label="Email"
            placeholder="Nombre de usuario o email"
            onChange={handleUserLoginChange}
          />
          <Input
            type={showPass ? "text" : "password"}
            name="password"
            label="Contraseña"
            placeholder="Contraseña"
            trailingIcon={showPass ? <RiEyeLine /> : <RiEyeOffLine />}
            trailingIconOnClick={toggleShowPass}
            onChange={handleUserLoginChange}
          />
        </form>
        <button onClick={login}>Ingresar</button>
      </div>
    </div>
  );
};

export default LoginView;

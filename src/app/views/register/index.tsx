import Input from "../../components/shared/Input";

const RegisterView = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-3xl">Crear un nuevo usuario</h2>
        <form>
          <Input />
          <Input />
          <Input />
        </form>
      </div>
    </div>
  );
};

export default RegisterView;

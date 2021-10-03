import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex items-center w-full flex-col">
      <div className="w-3/4">
        <Input type="email" placeholder="Email" label="Email" name="email" />
      </div>
      <div className="w-3/4 my-6">
        <Input
          type="password"
          placeholder="Contraseña"
          label="Contraseña"
          name="password"
        />
      </div>
      <Button
        text="Registrate"
        bg="bg-gradient-to-r from-purple-500 to-blue-500"
        hover="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
        padding="px-28 py-3"
      />
      <span className="mt-2 text-gray-500">
        Ya estas registrado?
        <Link to="/login">
          <span className="text-purple-500 hover:underline ml-1">Conectate</span>
        </Link>
      </span>
    </div>
  );
}

export default Login;

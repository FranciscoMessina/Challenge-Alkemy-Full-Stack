import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex items-center w-full flex-col">
      <div className="w-3/4">
        <div className="max-w-[320px] mx-auto">
          <label htmlFor="email" className="block italic mb-2">
            Email:
          </label>
          <input
            type="email"
            className="bg-gray-200 block rounded outline-none w-full p-2 pl-4 focus:border-b-2 border-purple-800 placeholder-gray-500"
            placeholder="Email"
            name="email"
          />
        </div>
      </div>
      <div className="w-3/4 my-6">
        <div className="max-w-[320px] mx-auto">
          <label htmlFor="password" className="block italic mb-2">
            Contraseña:
          </label>
          <input
            type="password"
            className="bg-gray-200 block rounded outline-none w-full p-2 pl-4 focus:border-b-2 border-purple-800 placeholder-gray-500"
            placeholder="Contraseña"
            name="password"
          />
        </div>
      </div>
      <Button
        text="Conectate"
        bg="bg-gradient-to-r from-purple-500 to-blue-500"
        hover="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
        padding="px-28 py-3"
      />
      <span className="mt-2 text-gray-500">
        No estas registrado?
        <Link to="/register">
          <span className="text-purple-500 hover:underline ml-1">Crea tu cuenta</span>
        </Link>
      </span>
    </div>
  );
}

export default Login;

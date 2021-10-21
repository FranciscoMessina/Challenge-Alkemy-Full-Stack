import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router';
import axios from 'axios';
import * as Yup from 'yup';

function Login({ setAuth }) {
  const history = useHistory();

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values) => {
    const response = await axios.post('http://localhost:3000/api/login', {
      email: values.email,
      password: values.password,
    });

    setAuth(response.data.user);

    history.push('/');
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Por favor completar!'),
    password: Yup.string().required('Por favor completar!'),
  });

  return (
    <>
      <div className="flex items-center w-full flex-col">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          <Form className="">
            <div className="max-w-[320px] mx-auto mt-6">
              <label htmlFor="email" className="block italic mb-2">
                Email:
              </label>
              <Field
                type="text"
                name="email"
                placeholder="Email"
                className="bg-gray-200 block rounded outline-none w-full p-2 pl-4 focus:border-b-2 border-purple-800 placeholder-gray-500"
              />

              <ErrorMessage name="email" className="text-red-700" component="div" />
            </div>
            <div className="max-w-[320px] mx-auto mt-6">
              <label htmlFor="password" className="block italic mb-2">
                Contraseña:
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Contraseña"
                className="bg-gray-200 block rounded outline-none w-full p-2 pl-4 focus:border-b-2 border-purple-800 placeholder-gray-500"
              />

              <ErrorMessage name="password" className="text-red-700" component="div" />
            </div>

            <div className="max-w-[320px] mx-auto mt-6">
              <Button
                text="Conectate"
                bg="bg-gradient-to-r from-purple-500 to-blue-500"
                hover="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
                padding="px-28 py-3"
              />
            </div>
          </Form>
        </Formik>
        <span className="mt-2 text-gray-500">
          No estas registrado?
          <Link to="/register">
            <span className="text-purple-500 hover:underline ml-1">Crea tu cuenta</span>
          </Link>
        </span>
      </div>
    </>
  );
}

export default Login;

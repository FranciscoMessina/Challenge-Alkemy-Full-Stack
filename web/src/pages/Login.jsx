import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Login({ setAuth }) {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('This field is required!'),
    password: Yup.string().required('This field is required!'),
  });

  const submit = async (values) => {
    const user = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => res.json());

    setAuth(user.user);

    console.log(user);
  };

  return (
    <div className="flex items-center w-full flex-col">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}>
        <Form>
          <div>
            <div className="max-w-[320px] mx-auto">
              <label htmlFor="email" className="block italic mb-2">
                Email:
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="bg-gray-200 block rounded outline-none w-full p-2 pl-4 focus:border-b-2 border-purple-800 placeholder-gray-500"
              />

              <ErrorMessage name="email" className="text-red-700" component="div" />
            </div>
          </div>
          <div className="my-6">
            <div className="max-w-[320px] mx-auto">
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
          </div>
          <Button
            text="Conectate"
            bg="bg-gradient-to-r from-purple-500 to-blue-500 select-none"
            hover="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
            padding="px-28 py-3"
          />
        </Form>
      </Formik>

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

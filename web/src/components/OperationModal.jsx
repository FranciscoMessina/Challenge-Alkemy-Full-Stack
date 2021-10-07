import { Close } from '@mui/icons-material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from './Button';
import * as Yup from 'yup';

function OperationModal({ type, setModal }) {
  const initialValues = {
    concept: type.concept || '',
    amount: type.amount || '',
    type: type.type || '',
  };
  let onSubmit;
  if (type === 'edit') {
    onSubmit = (values) => {
      console.log('edit', values);
    };
  } else {
    onSubmit = (values) => {
      console.log('add', values);
    };
  }

  const validationSchema = Yup.object({
    concept: Yup.string().required('This field is required!'),
    amount: Yup.string().required('This field is required!'),
    type: Yup.string().required('This field is required!'),
  });

  if (!type) {
    return null;
  }
  return (
    <>
      {/* Modal Content */}
      <div className="w-3/4 max-w-4xl bg-gray-300 py-3 absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded shadow-lg z-10 flex items-center flex-col">
        <div className="text-center mt-3">
          <span className="font-semibold">
            {type.modal === 'edit' ? 'EDITAR OPERACION' : 'AGREGAR OPERACION'}
          </span>
        </div>
        <div>
          <Close
            className="absolute right-2 sm:right-4 top-4 cursor-pointer"
            onClick={() => setModal('')}
          />
        </div>
        <div className="mt-4">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form className="grid grid-cols-1 sm:grid-cols-2 max-w-md mx-auto gap-6  justify-items-center">
              <div>
                <label htmlFor="email" className="block italic mb-2">
                  Concepto:
                </label>
                <Field
                  type="text"
                  name="concept"
                  placeholder="Concepto"
                  className="bg-gray-200 block rounded outline-none w-36 p-2 pl-4 focus:border-b-2 border-purple-800 placeholder-gray-500"
                />

                <ErrorMessage name="concept" className="text-red-700" component="div" />
              </div>
              <div>
                <label htmlFor="email" className="block italic mb-2">
                  Monto:
                </label>
                <Field
                  type="text"
                  name="amount"
                  placeholder="Monto"
                  className="bg-gray-200 block rounded outline-none w-36 p-2 pl-4 focus:border-b-2 border-purple-800 placeholder-gray-500"
                />

                <ErrorMessage name="amount" className="text-red-700" component="div" />
              </div>
              {type.modal !== 'edit' && (
                <div>
                  <label htmlFor="email" className="block italic mb-2">
                    Tipo:
                  </label>
                  <Field
                    as="select"
                    type="text"
                    name="type"
                    className="bg-gray-200 block rounded outline-none w-36 p-2 pl-4  placeholder-gray-500 ">
                    <option value=""></option>
                    <option value="income">Ingreso</option>
                    <option value="outcome">Egreso</option>
                  </Field>

                  <ErrorMessage name="type" className="text-red-700" component="div" />
                </div>
              )}
              <div className="sm:col-span-2 mt-4 mx-auto">
                <Button
                  text={`${type.modal === 'edit' ? 'EDITAR' : 'AGREGAR'}`}
                  bg="bg-gradient-to-r from-purple-500 to-blue-500 select-none col-span-2"
                  hover="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 "
                  padding="px-16 sm:px-28 py-3"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      {/* End Modal Content */}
      {/* Background Overlay */}
      <div className="w-full h-full bg-gray-700 bg-opacity-50 absolute top-0"></div>
    </>
  );
}

export default OperationModal;

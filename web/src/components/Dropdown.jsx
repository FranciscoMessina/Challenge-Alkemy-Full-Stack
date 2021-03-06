import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { Delete, EditRounded, MenuOpen } from '@mui/icons-material';
import axios from 'axios';

export default function Dropdown({ setModal, operation, updateOperations }) {
  const deleteOperation = async (id) => {
    const response = await axios.delete('http://localhost:3000/api/operations', {
      data: {
        id,
      },
    });

    console.log(response);
    await updateOperations();
  };

  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-0 hover:bg-opacity-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <MenuOpen
              className="w-5 h-5 text-black hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() =>
                      setModal({
                        modal: 'edit',
                        id: operation.id,
                        concept: operation.concept,
                        amount: operation.amount,
                        date: operation.date,
                        type: operation.type,
                      })
                    }
                    className={`${
                      active ? 'bg-yellow-500 ' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    <EditRounded className="mr-2" aria-hidden="true" />
                    Editar
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => deleteOperation(operation.id)}
                    className={`${
                      active ? 'bg-red-500 ' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    <Delete className="w-5 h-5 mr-2" aria-hidden="true" />
                    Eliminar
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Operation from '../components/Operation';
import OperationModal from '../components/OperationModal';

export default function Home({ operations, balance, auth, updateOperations }) {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    updateOperations();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center gap-4 max-w-7xl mx-auto">
        <div className="mx-auto w-full text-center">Bienvenido: {auth.email}</div>

        <div className="flex flex-col md:flex-row justify-between w-3/4 max-w-6xl gap-2">
          <div
            onClick={() => setModal({ type: 'add' })}
            className="bg-green-200 shadow-sm p-2 rounded text-center font-semibold active:scale-95 transform cursor-pointer select-none flex-1">
            AGREGAR OPERACION
          </div>
          <div
            className={`bg-gray-300 shadow-sm rounded flex-1 text-center border-2 p-2 ${
              balance < 0 ? 'border-red-500' : 'border-green-500'
            }`}>
            <span>
              Balance Actual:
              {balance >= 0
                ? ` Tiene $${Math.abs(balance)}`
                : ` Debe $${Math.abs(balance)}`}
            </span>
          </div>
        </div>
        <div className="bg-gray-300 shadow-sm rounded w-3/4 text-center p-2">
          <div className="w-full mb-4">
            <h2>OPERACIONES</h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className={`grid rounded grid-cols-3 p-1 px-2 `}>
              <div className="flex flex-col text-left">
                <span>Concepto y fecha</span>
              </div>
              <span className="text-center "> Monto</span>
            </div>
            {operations && operations.length > 0
              ? operations.map((op) => (
                  <Operation
                    operation={op}
                    setModal={setModal}
                    key={op.id}
                    updateOperations={updateOperations}
                  />
                ))
              : 'NO HAY OPERACIONES REGISTRADAS'}
          </div>
        </div>
      </div>

      <OperationModal
        modal={modal}
        setModal={setModal}
        updateOperations={updateOperations}
      />
    </>
  );
}

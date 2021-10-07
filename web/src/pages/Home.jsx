import React, { useState } from 'react';
import Operation from '../components/Operation';
import OperationModal from '../components/OperationModal';

export default function Home() {
  const [modal, setModal] = useState('');

  return (
    <>
      <div className="w-full flex flex-col items-center gap-4 max-w-7xl mx-auto">
        <div
          onClick={() => setModal('add')}
          className="bg-green-200 shadow-sm p-2 rounded w-3/4 text-center font-semibold active:scale-95 transform cursor-pointer select-none">
          AGREGAR OPERACION
        </div>
        <div className="bg-gray-300 shadow-sm rounded w-3/4 text-center p-2">
          <span>Balance Actual: </span>
        </div>
        <div className="bg-gray-300 shadow-sm rounded w-3/4 text-center p-2">
          <div className="w-full mb-4">
            <h2>OPERACIONES</h2>
          </div>
          <div className="flex flex-col gap-2">
            <Operation
              operation={{
                concept: 'Ponchos',
                amount: 500,
                date: '20*20*1050',
                type: 'income',
              }}
              setModal={setModal}
            />
            <Operation
              operation={{
                concept: 'Ponchos',
                amount: 500,
                date: '20*20*1050',
                type: 'outcome',
              }}
              setModal={setModal}
            />
          </div>
        </div>
      </div>
      <OperationModal
        type={modal}
        setModal={setModal}
        data={{ concept: 'a', amount: 40, type: 'ingreso' }}
      />
    </>
  );
}

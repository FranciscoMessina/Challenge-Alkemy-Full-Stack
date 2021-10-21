import Dropdown from './Dropdown';

function Operation({ operation, setModal, updateOperations }) {
  const date = new Date(operation.date).toLocaleDateString();

  return (
    <div
      className={`grid rounded grid-cols-3 p-1 px-2   ${
        operation.type === 'income' ? 'bg-green-400' : 'bg-red-400'
      }`}>
      <div className="flex flex-col text-left">
        <span>{operation.concept.toUpperCase()}</span>
        <span>{date}</span>
      </div>
      <span className="text-center ">
        {operation.type === 'income' ? ` ${operation.amount}` : ` ${operation.amount}`}
      </span>
      <div className="">
        <Dropdown
          operation={operation}
          setModal={setModal}
          updateOperations={updateOperations}
        />
      </div>
    </div>
  );
}

export default Operation;

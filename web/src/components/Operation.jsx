import Dropdown from './Dropdown';

function Operation({ operation, setModal }) {
  return (
    <div
      className={`flex rounded justify-between items-center p-1 px-2  ${
        operation.type === 'income' ? 'bg-green-400' : 'bg-red-400'
      }`}>
      <div className="flex flex-col">
        <span>{operation.concept.toUpperCase()}</span>
        <span>{operation.date}</span>
      </div>
      <span className="text-center">
        {operation.type === 'income'
          ? `+ $${operation.amount}`
          : `- $${operation.amount}`}
      </span>
      <div>
        <Dropdown operation={operation} setModal={setModal} />
      </div>
    </div>
  );
}

export default Operation;

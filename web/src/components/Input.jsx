function Input({ placeholder, type, label, name, onChange }) {
  return (
    <div className="max-w-[320px] mx-auto">
      <label htmlFor="email" className="block italic mb-2">
        {label || ''}:
      </label>
      <input
        type={type || 'text'}
        className="bg-gray-200 block rounded outline-none w-full p-2 pl-4 focus:border-b-2 border-purple-800 placeholder-gray-500"
        placeholder={placeholder || ''}
        name={name}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;

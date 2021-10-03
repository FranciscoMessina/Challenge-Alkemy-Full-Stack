function Button({ text, bg, padding, hover }) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded text-white transition ${bg} ${hover} active:scale-95 transform transition duration-150`}>
        <span>{text}</span>
      </button>
    </div>
  );
}

export default Button;

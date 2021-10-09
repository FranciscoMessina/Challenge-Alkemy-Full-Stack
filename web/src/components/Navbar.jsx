import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900 p-2 flex">
      <div className="flex w-full justify-center items-center">
        <Link to="/">
          <span className="text-white font-semibold text-xl">ALKEMY CHALLENGE</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

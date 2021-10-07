import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function Navbar({ user }) {
  console.log('nav', user);

  return (
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900 p-2 flex">
      <div className="flex w-full justify-center items-center">
        <Link to="/">
          <span className="text-white font-semibold text-xl">ALKEMY CHALLENGE</span>
        </Link>
      </div>
      <div className="flex items-center">
        {user && (
          <Button
            text="Desconectate"
            bg="bg-gradient-to-r from-purple-500 to-blue-500 select-none"
            hover="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
            padding="px-3 py-1"
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;

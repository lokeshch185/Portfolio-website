import React from 'react';

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-slate-900 z-[10000]">
      <div className="flex gap-5 text-5xl font-semibold sm:text-3xl">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-white to-secondary font-serifDisplay k">
          Kiran
        </h1>
        
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-white to-secondary font-serifDisplay r">
          Talele
        </h1>
      </div>
    </div>
  );
}

export default Loader;

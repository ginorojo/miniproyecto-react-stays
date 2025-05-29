// src/components/Header.jsx
import React from 'react'

export default function Header({openModal}) {
  return (
    <header className="pb-10 pt-2">
      <div className="pb-2.5 pl-7">
        <a href="./index.html">
          <img src="./logo-f7862584.svg" alt="logo" />
        </a>
      </div>
      <div className="flex justify-center item md:justify-end md:pr-[52px]">
        <input onClick={openModal} className="btnModal text-[10px] text-center flex w-32 h-10 rounded-l-lg shadow-sm/30" type="text" placeholder="Add location" />
        <input onClick={openModal} className="btnModal shadow-sm/30 text-[10px] text-center w-32 h-10" type="text" placeholder="Add guest" />
        <button onClick={openModal} className="cursor-pointer shadow-sm/30 rounded-r-lg w-12 flex justify-center items-center">
          <svg className="w-[18px] size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#eb5757">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>
    </header>
  )
}

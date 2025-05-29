import React, { useState, useEffect } from "react";
import GuestSelector from "./GuestSelector";

export default function Modal({
  closeModal,
  adultCount,
  setAdultCount,
  childCount,
  setChildCount,
  onSearch,
}) {
  const totalGuest = adultCount + childCount;
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const ciudades = ["Helsinki", "Turku", "Oulu", "Vaasa"];

const handleFocus = () => {
  setSuggestions(ciudades); // Muestra todas las ciudades al hacer clic en el input
};

useEffect(() => {
  if (location.trim() === "") {
    setSuggestions([]); // Si el input está vacío, ocultamos las sugerencias
  } else {
    const filtered = ciudades.filter((city) =>
      city.toLowerCase().startsWith(location.toLowerCase())
    );
    setSuggestions(filtered); // Filtramos mientras el usuario escribe
  }
}, [location]);


  const handleSearch = () => {
    const locationFormatted = location.trim().toLowerCase();
    onSearch(locationFormatted, totalGuest);
    closeModal();
  };

  return (
    <div className="modalPadre bg-black/50 fixed inset-0 h-[100%] ">
      <div className="relative bg-white md:h-[480px]">
        <div className="flex justify-between p-8 items-center">
          <p className="text-[12px] font-semibold">Edit your search</p>
          <button
            onClick={closeModal}
            id="closeModal"
            className="font-bold text-[20px]"
          >
            X
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center md:items-start">
          <div className="md:flex-row flex flex-col justify-center items-center md:items-start">
            {/* Location input container */}
            <div className="shadow-sm/30 w-80 h-18 rounded-t-lg md:rounded-lg relative">
              <label htmlFor="location" className="p-[10px] text-[12px]">
                Location
              </label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="px-[10px] border-none outline-none text-[15px] flex w-80 h-8"
                placeholder="Add location"
                autoComplete="off"
                 onFocus={handleFocus}
              />
              {/* Suggestions */}
              {suggestions.length > 0 && (
                <ul className="absolute z-10 bg-white border w-80 max-h-40 overflow-auto shadow-md top-full left-0 rounded-b-lg">
                  {suggestions.map((city, idx) => (
                    <li
                      key={city}
                      onClick={() => {
                        setLocation(city);
                     setTimeout(() => setSuggestions([]), 0);
                      }}
                      className="cursor-pointer px-3 py-1 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        className="inline-block mr-1 text-red-600"
                      >
                        <path d="M8 0a5.53 5.53 0 0 0-5.5 5.5C2.5 9.328 8 16 8 16s5.5-6.672 5.5-10.5A5.53 5.53 0 0 0 8 0Zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                      </svg>

                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Guests display container */}
            <div className="shadow-sm/30 w-80 h-18 rounded-b-lg md:rounded-lg">
              <label className="p-[10px] text-[12px]" htmlFor="guest">
                Guests
              </label>
              <br />
              <span
                id="guest"
                className="px-[10px] border-none outline-none text-[15px] flex w-80 h-8 totalguest"
              >
                {totalGuest > 0
                  ? `${totalGuest} guest${totalGuest > 1 ? "s" : ""}`
                  : "Add guests"}
              </span>
            </div>

            {/* GuestSelector positioned as in the new layout */}
            <div className="flex flex-col items-start w-full md:items-start md:justify-start md:flex-col-reverse relative">
              <div className="xl:right-[350px] md:absolute md:top-12 md:right-80 lg:top-12 lg:right-[460px]  gap-2.5 flex flex-col items-start p-[30px]">
                <p className="font-semibold">Adults</p>
                <p className="text-[14px]">Ages 13 or above</p>
                <div className="flex gap-4 items-center mb-6">
                  <button
                    className="border w-[20px] h-[20px] flex justify-center items-center btn-menosa"
                    onClick={() =>
                      setAdultCount((prev) => (prev > 0 ? prev - 1 : 0))
                    }
                    aria-label="Decrease adults"
                  >
                    -
                  </button>
                  <button className="cantidadAdultos pointer-events-none">
                    {adultCount}
                  </button>
                  <button
                    className="border w-[20px] h-[20px] flex justify-center items-center btn-masa"
                    onClick={() => setAdultCount((prev) => prev + 1)}
                    aria-label="Increase adults"
                  >
                    +
                  </button>
                </div>

                <div className="gap-2.5 flex flex-col items-start justify-start">
                  <p className="font-semibold">Children</p>
                  <p className="text-[14px]">Ages 12 or below</p>
                  <div className="flex gap-4 items-center">
                    <button
                      className="border w-[20px] h-[20px] flex justify-center items-center btn-menosn"
                      onClick={() =>
                        setChildCount((prev) => (prev > 0 ? prev - 1 : 0))
                      }
                      aria-label="Decrease children"
                    >
                      -
                    </button>
                    <button className="cantidadniños pointer-events-none">
                      {childCount}
                    </button>
                    <button
                      className="border w-[20px] h-[20px] flex justify-center items-center btn-masn"
                      onClick={() => setChildCount((prev) => prev + 1)}
                      aria-label="Increase children"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="lg:ml-10 flex justify-center items-center w-full pt-[20px] pb-[20px] md:pt-0 md:items-start">
                <button
                  id="botonEnviar"
                  onClick={handleSearch}
                  className="font-semibold text-white bg-[#eb5757] gap-1 border rounded-3xl w-[150px] h-[50px] flex items-center justify-center"
                >
                  <img
                    className="w-5"
                    src="./search.svg"
                    alt="search"
                    aria-hidden="true"
                  />
                  <p>Search</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

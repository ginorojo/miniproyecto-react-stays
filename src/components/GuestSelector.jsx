import React from 'react'

export default function GuestSelector({
  adultCount, setAdultCount, childCount, setChildCount
}) {
  const handleAdultChange = (amount) => {
    setAdultCount((prev) => Math.max(0, prev + amount));
  }

  const handleChildChange = (amount) => {
    setChildCount((prev) => Math.max(0, prev + amount));
  }

  return (
    <div className="flex flex-col items-start w-full md:items-start md:justify-start md:flex-col-reverse">
      <div className="xl:right-[700px] md:absolute md:top-40 md:right-80 lg:top-40 lg:right-[460px] gap-2.5 flex flex-col items-start p-[30px]">

        {/* Adultos */}
        <p className="font-semibold">Adults</p>
        <p className="text-[14px]">Ages 13 or above</p>
        <div className="flex gap-4">
          <button
            onClick={() => handleAdultChange(-1)}
            className="border w-[20px] h-[20px] flex justify-center items-center btn-menosa"
          >
            -
          </button>
          <span className="cantidadAdultos">{adultCount}</span>
          <button
            onClick={() => handleAdultChange(1)}
            className="border w-[20px] h-[20px] flex justify-center items-center btn-masa"
          >
            +
          </button>
        </div>

        {/* Niños */}
        <div className="gap-2.5 flex flex-col items-start justify-start mt-4">
          <p className="font-semibold">Children</p>
          <p className="text-[14px]">Ages 12 or below</p>
          <div className="flex gap-4">
            <button
              onClick={() => handleChildChange(-1)}
              className="border w-[20px] h-[20px] flex justify-center items-center btn-menosn"
            >
              -
            </button>
            <span className="cantidadniños">{childCount}</span>
            <button
              onClick={() => handleChildChange(1)}
              className="border w-[20px] h-[20px] flex justify-center items-center btn-masn"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

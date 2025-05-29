import { useStays } from '../hooks/useStays';

export default function StayList({ selectedCity, totalGuests }) {
  const { stays, loading, error} = useStays();


if (loading) {
  return (

     <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-[30px] place-items-center pt-14">
      {Array(14).fill(null).map((_, index) => (
        <a
          key={index}
          href="#"
          className="mb-[50px] block w-[337px] h-[223.26px] bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div role="status" className="w-[337px] h-[223.26px] animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
          </div>
        </a>
      ))}
    </section>
  );
}



  if (error) return <p className="px-[30px] text-red-500">{error}</p>;

  const filteredStays = stays.filter((stay) => {
    const cityMatch = !selectedCity || stay.city.toLowerCase().includes(selectedCity.toLowerCase());
    const guestMatch = !totalGuests || stay.maxGuests >= totalGuests;
    return cityMatch && guestMatch;
  });

  return (
    <main>
      <section className="pb-5 flex justify-between px-[30px] md:px-[50px]">
        <p id="ciudadMostrar" className="font-bold text-[20px]">
          {selectedCity ? `Stays in ${selectedCity}` : 'All stays'}
        </p>
        <p id="numberCiudad" className="text-[12px]">{filteredStays.length} stays</p>
      </section>

      <section id="alojamientos" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-[30px] place-items-center">
        {filteredStays.length > 0 ? (
          filteredStays.map(stay => (
            <div key={stay.id} className="w-[337px]  flex flex-col justify-center pb-[20px] gap-1">
              <div className="w-[337px] h-[223.26px]">
                <img className="w-full h-full object-cover rounded-2xl" src={stay.photo} alt={stay.title} />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  {stay.superHost && (
                    <span className="text-[10px] border border-black px-2 rounded-md font-semibold">SUPER HOST</span>
                  )}
                  <span className="text-[12px]">
                    {stay.type} {stay.beds !== null ? ` · ${stay.beds} beds` : ''}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-[12px]" xmlns="http://www.w3.org/2000/svg" fill="#eb5757" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  <span className="text-[12px]">{stay.rating}</span>
                </div>
              </div>
              <p className="font-semibold">{stay.title}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg ml-5">No se encontraron alojamientos con los criterios seleccionados.</p>
        )}
      </section>
    </main>
  );
}

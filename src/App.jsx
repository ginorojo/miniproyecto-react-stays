import React, { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import StayList from "./components/StayList";
import { useModal } from "./hooks/useModal";
import { useGuests } from "./hooks/useGuests";
import "./App.css";

function App() {
  const { isOpen, openModal, closeModal, } = useModal();
  const { adultCount, setAdultCount, childCount, setChildCount, totalGuests } = useGuests();
  

  // Estado para la ciudad seleccionada
  const [selectedCity, setSelectedCity] = useState("");
  
  function handleSearch(location, totalGuests) {
  setSelectedCity(location);
  console.log("Buscar en:", location, "con", totalGuests, "huéspedes");
}

  return (
    <>
      <Header openModal={openModal} />
      
      
      <section>
        {isOpen && (
          <Modal
            closeModal={closeModal}
            adultCount={adultCount}
            setAdultCount={setAdultCount}
            setChildCount={setChildCount}
            childCount={childCount}
            setSelectedCity={setSelectedCity}
            onSearch={handleSearch}
            
          />
        )}
      </section>

      <StayList 
        selectedCity={selectedCity} 
        totalGuests={totalGuests} 
      />
    </>
  );
}

export default App;

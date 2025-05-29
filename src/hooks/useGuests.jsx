import { useState } from "react";

import React from 'react'

export function useGuests() {

    const[adultCount, setAdultCount] = useState(0)
    const[childCount, setChildCount] = useState(0)

    const totalGuests = adultCount +childCount
  return {
    adultCount,
    setAdultCount,
    childCount,
    setChildCount,
    totalGuests}
  }
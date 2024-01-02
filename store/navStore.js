import React from 'react'
import { create } from 'zustand'

export const navStore = create((set) => ({
  origin:null,
  destination:null,
  travelTimeInformation:null,
  updateOrigin: (origin) => set(() => ({origin })),
  updateDestination: (destination) => set(() => ({destination })),
  updateTravelTimeInformation: (travelTimeInformation) => set(() => ({travelTimeInformation })),
  
}))

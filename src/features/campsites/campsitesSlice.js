import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campsitesArray: CAMPSITES,
};

const campsiteSlice = createSlice({
  name: "campsite",
  initialState,
});

export const campsitesReducer = campsiteSlice.reducer;

export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find(
    (cs) => cs.id === parseInt(id));
};

export const selectFeaturedCampsite = (state) => {
  return state.campsites.campsitesArray.find((cs) => cs.featured);
};

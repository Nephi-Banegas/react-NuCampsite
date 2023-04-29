import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
  return CAMPSITES;
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// }

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((cs) => cs.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((cs) => cs.featured);
};

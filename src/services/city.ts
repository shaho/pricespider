import items from "../data/nl.json";
import { City } from "../types";

export const getCities = (): City[] => {
  return items.map(({ city, admin_name, population }) => {
    return {
      city,
      admin_name,
      population,
    };
  });
};

export const searchResultMapper = (data) => {
  if (data.list) {
    return data.list.map(city => ({
      id: city.id,
      key: String(city.id),
      name: city.name,
      country: city.sys.country.toUpperCase(),
      temperature: parseInt(city.main.temp, 10),
    }));
  }

  return [];
};

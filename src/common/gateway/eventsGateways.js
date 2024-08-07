const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/airport';

export const fetchFlights = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/airport';

export const fetchFlights = async () => {
  try {
    const response = await fetch(baseUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    throw error;
  }
};

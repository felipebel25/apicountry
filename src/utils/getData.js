const API = 'https://restcountries.eu/rest/v2/';

const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;
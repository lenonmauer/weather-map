import apisauce from 'apisauce';

const api = apisauce.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
  params: {
    appid: 'ccb2259295ec5499c4c4626544e8dcfe',
    units: 'metric',
    lang: 'pt_br',
  },
});

export default api;

import moment from 'moment';

import 'moment/locale/pt-br';

export const weekForecastsMapper = data => ({
  city: data.city.name,
  forecasts: data.list.reduce((result, forecast) => {
    const date = moment(forecast.dt * 1000);
    const dayOfWeek = date.format('dddd');

    const forecastFormatted = {
      time: date.format('HH:mm'),
      weatherIcon: forecast.weather[0].icon.slice(0, -1),
      weatherDescription: forecast.weather[0].description,
      temp: parseInt(forecast.main.temp, 10),
    };

    const dayExists = result.find(item => item.dayOfWeek === dayOfWeek);

    if (dayExists) {
      dayExists.schedules.push(forecastFormatted);
      return result;
    }
    return [
      ...result,
      {
        dayOfWeek,
        schedules: [forecastFormatted],
      },
    ];
  }, []),
});

export const currentForecastMapper = (weekForecast, currentDayIndex) => ({
  city: weekForecast.city,
  ...weekForecast.forecasts[currentDayIndex],
});

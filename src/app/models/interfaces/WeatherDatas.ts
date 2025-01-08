export interface WeatherDatas {

  // padronizando a interface da API

  // latitude, longitude
  coord: {
    lon: number;
    lat:number;
  }

  // descrição do clima array de arrays
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ]
  // stations
  base: string;

  // Temperatura min e max do dia, pressao e umidade
  main: {

        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max:number;
        temp_min: number;
  },
  visibility: number;
  wind: {
    deg: number;
    speed: number;
  },
  clouds: {
    all: number;
  },
  dt:number;
  sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
  },
  timezone: number;
  id: number;
  name: string;
  cod: number;
}


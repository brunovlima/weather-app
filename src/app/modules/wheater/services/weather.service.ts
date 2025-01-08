import { HttpClient } from '@angular/common/http';
// Injetable informa onde a classe poderá ser injetada
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  //Provide in vem por padrão root, informa que todos os componentes recebe acesso a este serviço
  providedIn: 'root'
})
export class WeatherService {

  // Criando uma prorpiedade privada uma classe que recebe o hash
  private apikey = 'd1b9ef1b53c51c0bbb16606ef64dc834';

// Constructor serve para injetar um componente ou um serviço dentro da classe ou dependencias da classe
constructor(private http: HttpClient) { }

// metodo que recebe uma cidade por parametro e retorna a previsão do tempo
getWeatherDatas(cityName: string): Observable<any> {

  // this = self python importa o metodo para dentro do metodo
  return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${this.apikey}`,
   {}
   );
}

}

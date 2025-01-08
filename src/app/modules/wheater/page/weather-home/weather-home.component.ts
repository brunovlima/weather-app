import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { faCropSimple, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})

//
export class WeatherHomeComponent implements OnInit, OnDestroy{


  // Propriedades privadas
  private readonly destroyer$: Subject<void> = new Subject();

  // Prorpiedades
  initialCityName = 'São Paulo';
  weatherDatas!: WeatherDatas;
  searchIcon =  faMagnifyingGlass;

  // Injetando o metodo service dentro do componente por causa do root
  constructor(private weatherService: WeatherService) {}

  // ngOnInit() : Este método é executado automaticamente quando um componente é inicializado
  // executa qualquer lógica necessária durante a inicialização do componente.
  ngOnInit(): void {
    this.getWheatherDatas(this.initialCityName);
  }

  // Criando o metodo
  getWheatherDatas(cityName: string): void{

    // Adiciondo o metodo importado dentro da função "consumindo o serviço"
    this.weatherService

      // metodo importado de service
      .getWeatherDatas(cityName)

      // pipe serve para encadear operações
      .pipe(
        // O operador  takeUntil()  é usado para interromper o fluxo de dados quando uma determinada condição é atendida.
        takeUntil(this.destroyer$))

      //O método .subscribe() no Angular é usado para se inscrever em um Observable
      //e receber notificações quando novos valores são emitidos
      .subscribe({
        next: (response) =>{
          response && (this.weatherDatas = response);
        },

        // erros ou conclusão do Observable, permitindo que você atualize sua
        // interface do usuário com base nas mudanças nos dados.
        error:(error) => console.log(error)
    });

  }

  // Pegando dados da pesquisa e rodando na API
  onSubmit(): void{
    this.getWheatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  // ngOnDestroy() : Este método é chamado quando um componente está prestes a ser destruído e removido da visualização.
  // ngOnDestroy()  é usado para executar ações de limpeza exemplo  cache antes de destruir o componente.

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

}

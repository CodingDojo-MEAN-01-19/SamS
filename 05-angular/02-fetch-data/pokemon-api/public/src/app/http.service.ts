import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.pokemon();
  }

  // pokemon() {
  //   // our http response is an Observable, store it in a variable
  //   const tempObservable = this._http.get(
  //     'https://pokeapi.co/api/v2/pokemon/1/'
  //   );
  //   // subscribe to the Observable and provide the code we would like to do with our data from the response
  //   tempObservable.subscribe(data => console.log('Got pokemon!', data));
  //   tempObservable.subscribe(data =>
  //     console.log(
  //       'Abilities:',
  //       data.abilities[0].ability.name +
  //         ' and ' +
  //         data.abilities[1].ability.name
  //     )
  //   );
  // }

  // new code working on

  pokemon() {
    const tempObservable = this._http.get(
      'https://pokeapi.co/api/v2/pokemon/1/'
    );
    tempObservable.subscribe(data => {
      const pokemonName = data.name;
      // console.log(data);
      console.log(
        data.name +
          ' abilities are ' +
          data.abilities[0].ability.name +
          ' and ' +
          data.abilities[1].ability.name
      );
      this.sharedAbilities(data.abilities[0].ability.url, pokemonName);
    });
  }

  sharedAbilities(url, pokemonName) {
    const chlorophyll = this._http.get(url);
    chlorophyll.subscribe(data => {
      console.log(
        data.pokemon.length +
          ' pokemon with the same ability: ' +
          data.name +
          ' as ' +
          pokemonName
      );
      // console.log(data);
    });
  }
}

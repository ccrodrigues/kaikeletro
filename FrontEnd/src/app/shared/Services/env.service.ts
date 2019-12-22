import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  urlAPI : string;
  production : boolean;
  storageKeysConfig : any;

  constructor() { 
    this.urlAPI = environment.urlAPI;
    this.production = environment.production;
    this.storageKeysConfig = environment.storageKeysConfig;
  }
}

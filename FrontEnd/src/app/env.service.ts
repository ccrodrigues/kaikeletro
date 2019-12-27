import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { LocalUserModel } from './shared/models/auth/local-user.model';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  urlAPI : string;
  production : boolean;
  storageKeysConfig;

  constructor() { 
    this.urlAPI = environment.urlAPI;
    this.production = environment.production;
    this.storageKeysConfig = environment.storageKeysConfig;
  }
}

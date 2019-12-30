import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { EnvService } from 'src/app/env.service';
import { LocalUserModel } from '../models/auth/local-user.model';
import { Carrinho } from '../models/carrinho.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StorageService implements OnInit,OnDestroy {
  
    teste: BehaviorSubject<Carrinho>;
    constructor(private envService: EnvService) { }
    
    ngOnInit(): void {
        this.teste.subscribe(data => console.log(data))
    }
    ngOnDestroy(): void {
        this.teste.unsubscribe();
    }


    getLocalUser(): LocalUserModel {
        let usr = localStorage.getItem(this.envService.storageKeysConfig.localUser);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    }

    setLocalUser(obj: LocalUserModel) {
        if (obj == null) {
            localStorage.removeItem(this.envService.storageKeysConfig.localUser);
        }
        else {
            localStorage.setItem(this.envService.storageKeysConfig.localUser, JSON.stringify(obj));
        }
    }

    getCarrinho(): Carrinho {
        let str = localStorage.getItem(this.envService.storageKeysConfig.carrinho);
        if (str != null) {
            return JSON.parse(str);
        }
        else {
            return null;
        }
    }

    setCarrinho(obj: Carrinho) {
        if (obj != null) {
            localStorage.setItem(this.envService.storageKeysConfig.carrinho, JSON.stringify(obj));
            this.teste.next(this.envService.storageKeysConfig.localUser);
        }
        else {
            localStorage.removeItem(this.envService.storageKeysConfig.carrinho);
        }
    }


}

import { Injectable } from '@angular/core';
import { EnvService } from 'src/app/env.service';
import { LocalUserModel } from '../models/auth/local-user.model';
import { Carrinho } from '../models/carrinho.model';
import { ItemVendaModel } from '../models/item-venda.model';
import { EnderecoModel } from '../models/endereco.model';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private envService: EnvService) { }

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

    getCarrinho(): ItemVendaModel[] {
        let str = localStorage.getItem(this.envService.storageKeysConfig.carrinho);
        if (str != null) {
            return JSON.parse(str);
        }
        else {
            return null;
        }
    }

    setCarrinho(obj : ItemVendaModel[] ) {
        if (obj != null) {
            localStorage.setItem(this.envService.storageKeysConfig.carrinho, JSON.stringify(obj)  );
        }
        else {
            localStorage.removeItem(this.envService.storageKeysConfig.carrinho);
        }
    }
    getEndereco(): EnderecoModel{
        let str = localStorage.getItem(this.envService.storageKeysConfig.endereco);
        if (str != null) {
            return JSON.parse(str);
        }
        else {
            return null;
        }
    }

    setEndereco(obj : EnderecoModel ) {
        if (obj != null) {
            localStorage.setItem(this.envService.storageKeysConfig.endereco, JSON.stringify(obj)  );
        }
        else {
            localStorage.removeItem(this.envService.storageKeysConfig.endereco);
        }
    }
}

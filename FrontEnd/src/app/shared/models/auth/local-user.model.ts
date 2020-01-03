import { tokenAuth } from './token-auth.model';

export class LocalUserModel {
    token : string;
    email:string;

    nome : string;
    exp : number;    
    iat : number;

    scopes : string[];
}
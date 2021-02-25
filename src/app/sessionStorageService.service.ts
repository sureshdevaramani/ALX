import {  Injectable } from '@angular/core';
import { SessionStorageModel } from './sessionStorage.model';
import { Subject } from 'rxjs';

    @Injectable()

    export class SessionStorageService {
    
    sessionStorgaeModel:SessionStorageModel=new SessionStorageModel();
    constructor() { }
    
    public set(key:string,value:string){
    this.sessionStorgaeModel[key]=value;
    }
    get(key:string):string{
    return this.sessionStorgaeModel[key]
    }
    remove(key:string){
    this.sessionStorgaeModel[key]=null;
    }
    clear(){
    this.sessionStorgaeModel=new SessionStorageModel();
    }
    }
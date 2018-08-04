import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class MinisterService{

    constructor(private http : Http){

    }

    createEmp(emp){
return this.http.post("https://government-b8522.firebaseio.com/ministers.json",emp);
    }

    getEmp(){

    }

    deleteEmp(id){

    }

}
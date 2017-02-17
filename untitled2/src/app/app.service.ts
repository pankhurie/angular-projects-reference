import {Injectable} from '@angular/core'
import {Intern} from "./intern";

@Injectable()
export class AppService{
    interns: Intern[] = [{
        id:1,name:'Pankhurie'
    }, {
        id: 2, name: 'Anmol'
    }, {
        id: 3, name: 'Shubhra'
    }, {
        id: 4, name: 'Neha'
    }];


    /**
     * {
        id: 1, name: 'Pankhurie'
    }, {
        id: 2, name: 'Anmol'
    }, {
        id: 3, name: 'Shubhra'
    }, {
        id: 4, name: 'Neha'
    }
     *
     */

    /**
     * add(passedId:number, passedName:string){
        this.interns.push(new Intern(passedId, passedName));
    }

     deleteById(passedId:number){

    }

     deleteByName(passedName:string){

    }

     updateById(passedId:number){

    }

     updateByName(passedName:string){

    }

     getById(passedId:number){

    }

     getByName(passedName:string){

    }
     */


}
import {Component, OnInit} from '@angular/core';
import {Intern} from "./intern";
import {AppService} from "./app.service";
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
})

export class AppComponent implements OnInit{
    myinterns:Intern[];

    constructor(private service:AppService){

    }

    /**
     * method will be called automatically when component is initialised
     */
    ngOnInit(){
        this.myinterns=this.service.interns;

    }



    // name = 'Hello';
    // boolVal = true;
    // interns: Intern[] = [{
    //     id: 1, name: 'Pankhurie'
    // }, {
    //     id: 2, name: 'Anmol'
    // }, {
    //     id: 3, name: 'Shubhra'
    // }, {
    //     id: 4, name: 'Neha'
    // }];

    // intern = new Intern();

    // submit() {
    //     this.boolVal = !(this.boolVal);
    //
    // }
    //
    // clickMe(param: string) {
    //     alert(param);
    // }

    // formsubmit(){
    //     alert("Welcome "+JSON.stringify(this.intern));
    // }
}

export class Intern{
    id:number;
    name:string;

    // constructor();

    // constructor(id:number, name:string);

    constructor(id?:any, name?:any){
        if(id&&name){
        this.id=id;
        this.name=name;
        }else{
            this.id=null;
            this.name=null;
        }
    }

}
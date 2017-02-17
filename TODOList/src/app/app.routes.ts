import {Routes} from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {TodosComponent} from "./todolist/todos.component";

export const routes:Routes = [{
    path:'home',
    component: HomeComponent
},{
    path : '',
    redirectTo: '/home',
    pathMatch: 'full'
},{
    path : 'todos',
    component: TodosComponent

}];


//
// export const routes:Routes = [{
//     path:'home',
//     component: HomeComponent
// },{
//     path:'login',
//     component: LoginComponent
// },{
//     path:'details/:id',
//     component: LoginComponent
// }];
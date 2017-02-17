import {Routes} from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {TodosComponent} from "./todolist/todos.component";
import {InternsComponent} from "./interns/interns.component";

export const routes:Routes = [{
    path:'home',
    component: HomeComponent
},{
    path:'login',
    component: LoginComponent
},{
    path:'details/:id',
    component: LoginComponent
},{
    path : '',
    redirectTo: '/home',
    pathMatch: 'full'
},{
    path : 'todos',
    component: TodosComponent

},{
    path : 'interns',
    component: InternsComponent

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
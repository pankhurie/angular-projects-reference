"use strict";
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var todos_component_1 = require("./todolist/todos.component");
var interns_component_1 = require("./interns/interns.component");
exports.routes = [{
        path: 'home',
        component: home_component_1.HomeComponent
    }, {
        path: 'login',
        component: login_component_1.LoginComponent
    }, {
        path: 'details/:id',
        component: login_component_1.LoginComponent
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: 'todos',
        component: todos_component_1.TodosComponent
    }, {
        path: 'interns',
        component: interns_component_1.InternsComponent
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
//# sourceMappingURL=app.routes.js.map
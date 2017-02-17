"use strict";
var home_component_1 = require("./home/home.component");
var todos_component_1 = require("./todolist/todos.component");
exports.routes = [{
        path: 'home',
        component: home_component_1.HomeComponent
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: 'todos',
        component: todos_component_1.TodosComponent
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
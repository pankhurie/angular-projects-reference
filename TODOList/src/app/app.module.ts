import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common'
import {AppComponent}  from './app.component';
import {HomeComponent}  from './home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {AppService} from "./app.service";
import {TodosComponent} from "./todolist/todos.component";
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [BrowserModule, FormsModule, CommonModule, RouterModule.forRoot(routes), HttpModule],
    declarations: [AppComponent, HomeComponent, TodosComponent],
    bootstrap: [AppComponent],
    providers: [AppService]
})
export class AppModule {
}

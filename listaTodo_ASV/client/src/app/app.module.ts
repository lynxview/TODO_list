import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ArticleComponent } from './article/article.component';
import { ArticleManagerComponent } from './article-manager/article-manager.component';
import { FormularioControlComponent } from './formulario-control/formulario-control.component';
import { SDKBrowserModule } from './shared/sdk';
import { LlamadaApiComponent } from './llamada-api/llamada-api.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ArticleComponent,
    ArticleManagerComponent,
    FormularioControlComponent,
    LlamadaApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule.forRoot(),
    SDKBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

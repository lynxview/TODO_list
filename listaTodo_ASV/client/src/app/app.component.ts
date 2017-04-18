import { Component } from '@angular/core';
import { TodoListComponent} from './todo-list/todo-list.component';
import { LlamadaApiComponent } from './llamada-api/llamada-api.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   title = 'Todo List';
}

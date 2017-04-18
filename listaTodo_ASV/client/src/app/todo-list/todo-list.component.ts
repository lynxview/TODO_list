import { Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { Article } from '../shared/sdk/models';
import { ArticleApi } from '../shared/sdk/services';
import { ArticleExtended } from '../shared/extended/article.extended.model';

@Component({
  selector: 'app-todo-list',
  inputs: ['articlesList'],
  outputs:['onArticleSelected','onArticleDeleted','onArticleUpdated'],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  articlesList : ArticleExtended[];
   onArticleSelected : EventEmitter<any>;
   onArticleDeleted: EventEmitter<any>;
   onArticleUpdated: EventEmitter<any>;
  private currentArticle: Article;

  constructor() {
    this.onArticleSelected = new EventEmitter();
    this.onArticleDeleted = new EventEmitter();
    this.onArticleUpdated = new EventEmitter();
  }

  articleWasSelected(article): void {
    console.log('article selected event todolist: ', article);
    this.onArticleSelected.emit(article);
  }

  articleWasUpdated(article): void {
    console.log('article updated event todolist: ', article);
    this.onArticleUpdated.emit(article);
  }

  articleWasDeleted(article): void {
    this.onArticleDeleted.emit(article);
  }


  ngOnInit() {
  }
}

import { Component,
   OnInit,
   Input,
   Output,
   EventEmitter
  } from '@angular/core';
import { Article } from '../shared/sdk/models';
import { ArticleApi } from '../shared/sdk/services';
import { ArticleExtended } from '../shared/extended/article.extended.model';

@Component({
  selector: '[app-article]',
  inputs: ['article'],
  outputs:['onArticleSelected','onArticleDeleted','onArticleUpdated'],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: ''
  }
})

export class ArticleComponent implements OnInit {
   article : ArticleExtended;
   onArticleSelected : EventEmitter<any>;
   onArticleDeleted: EventEmitter<any>;
   onArticleUpdated: EventEmitter<any>;

  constructor() {
    this.onArticleSelected = new EventEmitter();
    this.onArticleDeleted = new EventEmitter();
    this.onArticleUpdated = new EventEmitter();
  }

  articleClick(evento){
    this.article.toggleSelected();
    this.onArticleSelected.emit('Evento click componente articulo');
  }

  editElement(article):void{
    this.onArticleUpdated.emit(article)
  }

  deleteElement(article):void{
    this.onArticleDeleted.emit(article);
  }

  setEditMode(valor):void{
    this.article.editando = valor;
      if(valor == false){
        this.resetEditValues();
      }
  }

  resetEditValues():void{
    this.article.dataEdit.valor = "";
    this.article.dataEdit.nombre = "";
  }

  onKey($event,element):void{
    this.article.dataEdit[element] = $event.target.value;
  }

  ngOnInit() {
  }

}

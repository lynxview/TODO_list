import { Component,
         OnInit,
         Output,
         EventEmitter
        } from '@angular/core';
import { TodoListComponent} from '../todo-list/todo-list.component';
import { FormularioControlComponent } from '../formulario-control/formulario-control.component';
import { Article } from '../shared/sdk/models';
import { ArticleApi } from '../shared/sdk/services';
import { ArticleExtended } from '../shared/extended/article.extended.model';


@Component({
  selector: 'app-article-manager',
  templateUrl: './article-manager.component.html',
  outputs:['onArticleSelected'],
  styleUrls: ['./article-manager.component.css']
})
export class ArticleManagerComponent implements OnInit {
  articles : ArticleExtended[];
  total : number ;

  constructor(private articleApi : ArticleApi) {
    this.articles = [];
    this.articleApi.find()
      .subscribe((response:any) =>{
          for (let element in response) {
            this.articles.push(new ArticleExtended(response[element]));
          }
          this.calcularTotal();
      },
      (error:any) =>{
          console.log('Ha ocurrido un error en la peticion');
      }
    );
  }

  triggerEvento($event): void {
    console.log('Article clicked manager: ', $event);
  }

  agregarArticulo(elemento): void{
    let nuevoArticulo = {
      "nombre": elemento.nombre,
      "valor": elemento.valor,
      "votes": 0,
      "selected": false,
      "editando": false,
      "amount": {}
    }
    this.articleApi.create(nuevoArticulo).subscribe(
      (response:any) =>{
        this.articles.push(new ArticleExtended(response));
        this.calcularTotal()
      },
      (error:any) =>{
          console.log('Ha ocurrido un error en la peticion');
      }
    );
  }

  calcularTotal():void{
    let total : number = 0.0;
        for(let index in this.articles){
          total = total + parseFloat(this.articles[index].valor);
        }
      this.total = total;
  }

  marcarTodos(valor):void{
    for(let index in this.articles){
      this.articles[index].setSelected(valor);
    }
  }

  updateElement(article):void{
    console.log('article-manager Update Element');
      this.articleApi.updateAttributes(article.id,article.dataEdit).subscribe(
        (response:any) =>{
          let articuloTmp;
            articuloTmp = this.articles.filter((item)=>{
              return(item.id == article.id)
            });

            articuloTmp[0].valor = article.dataEdit.valor;
            articuloTmp[0].nombre = article.dataEdit.nombre;
            articuloTmp[0].setEditMode(false);
            this.calcularTotal();
        },
        (error:any) =>{
          console.log('Ha ocurrido un error en la peticion');
          console.log(error);
        });
  }

  deleteElement(article):void{
      this.articleApi.deleteById(article.id).subscribe(
        (response:any) =>{
            this.articles = this.articles.filter((item)=>{
              return(item.id !== article.id)
            });
            this.calcularTotal();
        },
        (error:any) =>{
          console.log('Ha ocurrido un error en la peticion');
        });
  }

  ngOnInit() {
  }

}

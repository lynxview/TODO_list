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
  selector: 'app-llamada-api',
  templateUrl: './llamada-api.component.html',
  styleUrls: ['./llamada-api.component.css']
})
export class LlamadaApiComponent implements OnInit {

  constructor(private articleApi:ArticleApi) { }

  ngOnInit() {
  }

  cuentaElementos():void{
    let nuevoArticulo : Article = new Article();
    this.articleApi.count().subscribe(
      (response:any) =>{
        console.log('Respuesta del server');
        console.log(response);
      });
    }

    creaElementos():void{
      let nuevoArticulo =  {
        "nombre": "Articulo Nuevo",
        "valor": 0,
        "votes": 0,
        "selected": false,
        "editando": false,
        "amount": {}
      }

      this.articleApi.create(nuevoArticulo).subscribe(
        (response:any) =>{
          console.log('Respuesta del server');
          console.log(response);
        });
      }

      getAllArticles():void {
        this.articleApi.find()
        .subscribe((response:any) =>{
            for (let element in response) {
              let elementoTemp =  new ArticleExtended(response[element]);
            }
        });
      }


    }

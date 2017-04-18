import { Article } from '../sdk/models';

export class ArticleExtended extends Article {
 public dataEdit:any = {valor:'', nombre:''};
  constructor(json: Article) { super(json);
   }

  public toggleSelected():void{
    this.selected = !this.selected;
  }
  public setSelected(valor):void{
    this.selected = valor;
  }

  public setEditMode(valor):void{
    this.editando = valor;
      if(valor == false){
        this.resetEditValues();
      }
  }

  public resetEditValues():void{
    this.dataEdit.valor = "";
    this.dataEdit.nombre = "";
  }
}

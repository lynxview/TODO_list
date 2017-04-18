/* tslint:disable */

declare var Object: any;
export interface ArticleInterface {
  "nombre": any;
  "valor": any;
  "votes"?: any;
  "selected": any;
  "editando"?: any;
  "amount"?: any;
  "id"?: any;
}

export class Article implements ArticleInterface {
  "nombre": any;
  "valor": any;
  "votes": any;
  "selected": any;
  "editando": any;
  "amount": any;
  "id": any;
  constructor(data?: ArticleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Article`.
   */
  public static getModelName() {
    return "Article";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Article for dynamic purposes.
  **/
  public static factory(data: ArticleInterface): Article{
    return new Article(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Article',
      plural: 'articles',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'any'
        },
        "valor": {
          name: 'valor',
          type: 'any'
        },
        "votes": {
          name: 'votes',
          type: 'any'
        },
        "selected": {
          name: 'selected',
          type: 'any',
          default: false
        },
        "editando": {
          name: 'editando',
          type: 'any',
          default: false
        },
        "amount": {
          name: 'amount',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}

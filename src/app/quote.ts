export class Quote {
  public showScribble:boolean;
  constructor(public id:number, public quote:string, public author:string, public name:string, public completeDate:Date, public likes:number, public dislikes:number) {
    this.showScribble=false
  }
}

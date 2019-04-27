export class Quote {
  public showScribble:boolean;
  constructor(public id:number, public name:string, public scribble:string, public completeDate:Date) {
    this.showScribble=false
  }
}

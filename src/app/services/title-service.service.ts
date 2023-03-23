import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title = ""

  constructor() { }

  setTitle(title: string){
    this.title = title;
  }

  getTitle():string{
    return this.title;
  }

}

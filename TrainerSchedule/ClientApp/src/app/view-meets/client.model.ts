import { Injectable } from '@angular/core';

@Injectable()
export class Client {

  constructor(public clientID: string,
    public FirstName: string,
    public LastName: string,
    public Email: string,
    public Phone: string
    
  ) {


  }
}

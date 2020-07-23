import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ILogin } from '../modals/login';
import { map } from 'rxjs/operators';
import { IProducts } from '../modals/Products';

@Injectable({
  providedIn: 'root'
})
export class ScartService {

  constructor(private httpclient:HttpClient) { }

  login(username:string,password:string)
  {
    return this.httpclient.get<ILogin>('https://xebiascart.herokuapp.com/users?username=amigo')
       .pipe(map(userdetails=>{

           {
              localStorage.setItem('currentUser', 'amigo');
              //return userdetails.username;
           }
        })
      )
  }
  getPorducgtList()
  {
     return  this.httpclient.get<IProducts[]>('https://xebiascart.herokuapp.com/products')
     
  }
}

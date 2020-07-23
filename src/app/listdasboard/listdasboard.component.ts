import { Component, OnInit } from '@angular/core';
import { ILogin } from '../modals/login';
import { Router } from '@angular/router';
import { ScartService } from '../sCartService/scart.service';
import { IProducts } from '../modals/Products';

@Component({
  selector: 'app-listdasboard',
  templateUrl: './listdasboard.component.html',
  styleUrls: ['./listdasboard.component.css']
})
export class ListdasboardComponent implements OnInit {

  constructor(private scartservice:ScartService,private route:Router) { }
  user:any
  imageurl:any
  productlist:IProducts[]
  ngOnInit() {
    this.user=localStorage.getItem('currentUser')
   console.log(this.user)
   this.scartservice.getPorducgtList()
    .subscribe((productslist)=>
    {
          this.productlist=productslist;
          console.log(productslist)
    })
  }
  logout()
  {
    this.route.navigate([''])
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScartService } from '../sCartService/scart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;

  constructor(private scartservice:ScartService,private route:Router) { }

  ngOnInit() {
  }
  onLogin(form:NgForm)
    {
      console.log(form.value.login,form.value.password)
         this.scartservice.login(form.value.login,form.value.password)
         .subscribe(()=>
          {

            this.route.navigate(['/itemdashboard'])
          })

     form.reset();
    }
}

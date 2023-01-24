import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  formLogin!: FormGroup;

  constructor(
    private userService:UserService,
    private route:Router
  ){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })

  }
  ngOnInit(): void {
    
  }

  Guar(){
    this.userService.login(this.formLogin.value)
    .then(
      response => {
        console.log(response)
        this.route.navigate(['/home']);
      }
    )
    .catch(error => console.log(error));
  }

}

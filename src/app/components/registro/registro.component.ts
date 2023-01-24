import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  formRegistro!: FormGroup;

  constructor(
    private userservice: UserService,
    private router: Router
  ){

    this.formRegistro = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
    
  }

  ngOnInit(): void { 
  }

  onSubmit(){
    this.userservice.registerUser(this.formRegistro.value)
    .then(response => {
      console.log(response)
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }
}

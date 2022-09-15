
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user : User = new User();
  

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
    if(!this.auth.validate(this.user)){
      Swal.fire({
        title: 'Usuário e/ou senha inválidos!',
        text: 'Esqueceu a senha minha paissao?',
        icon: 'error',
        confirmButtonText: 'Sim =('
      })
    }
  }
}

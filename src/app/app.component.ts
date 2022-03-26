import { Component, OnInit } from '@angular/core';
import { Usuarios } from './models/usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Desafio Angular GitHub API';
  searchuser = '';
  btnDisabled = true;

  handleClick() {
    // do something
  }

  ngOnInit(): void {
    this.getApiData('Lucas-Ed').then((data) => console.log(data));
  }

  async getApiData(name: string): Promise<any> {
    const url = 'https://api.github.com/users';
    const Response = await fetch(`${url}/${name}`);
    return Response.json();
  }

  handleSearchChange(event: any) {

  }
}

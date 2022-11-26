import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigme-three',
  host: {
    class:'app-enigme'
  },
  templateUrl: './enigme-three.component.html',
  styleUrls: ['./enigme-three.component.scss']
})
export class EnigmeThreeComponent implements OnInit {

  description = "Voici la description de la troisième enigme !";

  constructor() { }

  ngOnInit(): void {
  }

}

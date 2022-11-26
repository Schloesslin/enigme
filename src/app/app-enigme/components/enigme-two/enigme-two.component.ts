import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigme-two',
  host: {
    class:'app-enigme'
  },
  templateUrl: './enigme-two.component.html',
  styleUrls: ['./enigme-two.component.scss']
})
export class EnigmeTwoComponent implements OnInit {

  description = "Voici la description de la deuxième enigme !";

  constructor() { }

  ngOnInit(): void {
  }

}

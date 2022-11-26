import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigme-four',
  host: {
    class:'app-enigme'
  },
  templateUrl: './enigme-four.component.html',
  styleUrls: ['./enigme-four.component.scss']
})
export class EnigmeFourComponent implements OnInit {

  description = "Voici la description de la quatrième enigme !";

  constructor() { }

  ngOnInit(): void {
  }

}

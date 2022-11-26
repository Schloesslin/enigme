import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigme-five',
  host: {
    class:'app-enigme'
  },
  templateUrl: './enigme-five.component.html',
  styleUrls: ['./enigme-five.component.scss']
})
export class EnigmeFiveComponent implements OnInit {

  description = "Voici la description de la cinquième enigme !";

  constructor() { }

  ngOnInit(): void {
  }

}

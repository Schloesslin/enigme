import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigme-one',
  host: {
    class:'app-enigme'
  },
  templateUrl: './enigme-one.component.html',
  styleUrls: ['./enigme-one.component.scss']
})
export class EnigmeOneComponent implements OnInit {

  description = "Voici la description de la première enigme !";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigme-four-image-one',
  host: {
    class:'app-enigme-image-container'
  },
  templateUrl: './enigme-four-image-one.component.html',
  styleUrls: ['./enigme-four-image-one.component.scss']
})
export class EnigmeFourImageOneComponent implements OnInit {

  imageSrc="../../../../assets/images/spa.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}

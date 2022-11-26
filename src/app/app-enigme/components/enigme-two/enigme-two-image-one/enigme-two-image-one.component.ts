import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigme-two-image-one',
  host: {
    class:'app-enigme-image-container'
  },
  templateUrl: './enigme-two-image-one.component.html',
  styleUrls: ['./enigme-two-image-one.component.scss']
})
export class EnigmeTwoImageOneComponent implements OnInit {

  imageSrc="../../../../assets/images/relaxation.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}

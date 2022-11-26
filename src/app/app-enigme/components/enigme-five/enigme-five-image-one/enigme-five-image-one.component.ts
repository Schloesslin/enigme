import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigme-five-image-one',
  host: {
    class:'app-enigme-image-container'
  },
  templateUrl: './enigme-five-image-one.component.html',
  styleUrls: ['./enigme-five-image-one.component.scss']
})
export class EnigmeFiveImageOneComponent implements OnInit {

  imageSrc="../../../../assets/images/reproduction.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}

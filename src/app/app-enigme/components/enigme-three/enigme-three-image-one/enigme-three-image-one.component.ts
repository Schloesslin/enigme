import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigme-three-image-one',
  host: {
    class:'app-enigme-image-container'
  },
  templateUrl: './enigme-three-image-one.component.html',
  styleUrls: ['./enigme-three-image-one.component.scss']
})
export class EnigmeThreeImageOneComponent implements OnInit {

  imageSrc="../../../../assets/images/selfservice.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}

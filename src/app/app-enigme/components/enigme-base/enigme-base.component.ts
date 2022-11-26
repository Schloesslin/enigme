import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigme-base',
  templateUrl: './enigme-base.component.html',
  styleUrls: ['./enigme-base.component.scss']
})
export class EnigmeBaseComponent implements OnInit {

  @Input() title: string = "";
  @Input() description: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}

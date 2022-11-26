import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enigme-base-title',
  templateUrl: './enigme-base-title.component.html',
  styleUrls: ['./enigme-base-title.component.scss']
})
export class EnigmeBaseTitleComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onGoHome() {
    this;this.router.navigate(['']);
  }

}

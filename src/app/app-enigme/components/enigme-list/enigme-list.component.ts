import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enigme-list',
  templateUrl: './enigme-list.component.html',
  styleUrls: ['./enigme-list.component.scss']
})
export class EnigmeListComponent implements OnInit {

  imageEnigme1Src="../../../../assets/images/takeaway.jpg";
  imageEnigme2Src="../../../../assets/images/relaxation.jpg";
  imageEnigme3Src="../../../../assets/images/selfservice.jpg";
  imageEnigme4Src="../../../../assets/images/spa.jpg";
  imageEnigme5Src="../../../../assets/images/reproduction.jpg";


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  navigateTo(routerUrls: string []): void {
    this.router.navigate(routerUrls, {relativeTo: this.route})
  }
}

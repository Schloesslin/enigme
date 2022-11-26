import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enigme-one-image-one',
  host: {
    class:'app-enigme-image-container'
  },
  templateUrl: './enigme-one-image-one.component.html',
  styleUrls: ['./enigme-one-image-one.component.scss']
})
export class EnigmeOneImageOneComponent implements OnInit {

  imageSrc="../../../../assets/images/takeaway.jpg";

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onClickIndice1(): void {
    this.router.navigate(['2'], {relativeTo: this.route});
  }

}

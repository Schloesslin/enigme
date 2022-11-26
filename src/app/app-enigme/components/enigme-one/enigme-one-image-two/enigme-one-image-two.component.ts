import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enigme-one-image-two',
  host: {
    class:'app-enigme-image-container'
  },
  templateUrl: './enigme-one-image-two.component.html',
  styleUrls: ['./enigme-one-image-two.component.scss']
})
export class EnigmeOneImageTwoComponent implements OnInit {

  imageSrc="../../../../assets/images/takeaway2.png";

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onClickIndice2(): void {
    this.router.navigate(['..'], {relativeTo: this.route});
  }


}

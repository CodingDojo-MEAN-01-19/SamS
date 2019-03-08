import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css'],
})
export class AllReviewsComponent implements OnInit {
  num: any;
  constructor(private _route: ActivatedRoute) {}
  ngOnInit() {
    // note the use of .parent
    this._route.parent.params.subscribe(params =>
      console.log(`The parent params: ${params}`)
    );
  }
}

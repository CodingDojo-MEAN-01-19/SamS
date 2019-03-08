import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css'],
})
export class ReviewDetailComponent implements OnInit {
  number: any;
  constructor(private _route: ActivatedRoute) {
    this._route.paramMap.subscribe(
      (params: ParamMap) => (this.number = params.get('id'))
    );
  }

  ngOnInit() {}
}

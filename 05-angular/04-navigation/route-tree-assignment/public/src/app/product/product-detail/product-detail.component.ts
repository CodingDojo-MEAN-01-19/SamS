import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ParamMap } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  number: any;
  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.paramMap.subscribe(
      (params: ParamMap) => (this.number = params.get('id'))
    );
  }
}

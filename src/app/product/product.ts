import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  productId!: number;
  constructor(private route: ActivatedRoute) {
    // this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id'));
    });
  }
}

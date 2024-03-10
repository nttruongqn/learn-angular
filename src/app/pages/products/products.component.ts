import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  title = "Trang sản phẩm"
  products: any;
  productForm: FormGroup | any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      'name': new FormControl(),
      'price': new FormControl(),
    })
    this.getData();
  }
  getData() {
    this.dataService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }

  submit() {

  }

  handleClickCreateBtn = () => {
    console.log('aaaa');
  }
}

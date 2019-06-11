import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material'
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<ProductsComponent>,private fb:FormBuilder) { }
  
  ngOnInit() {
  }
  more:FormArray;
  productdata=this.fb.group({
    more :this.fb.array([this.addMore()])
  });
  
  addMore(): FormGroup {
    return this.fb.group({
    p_name:['',Validators.required],
    p_sku : ['',Validators.required],
    p_quantity : ['',Validators.required]
    })
  }
  get productsArray(){
    return <FormArray>this.productdata.get('more');
  }

  addProduct(){
    this.productsArray.push(this.addMore());
  }
  removeProduct(index){
    this.productsArray.removeAt(index);
  }

  submitHandler()
  {
    this.dialogRef.close(this.productdata.value)
  }

}

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


import { MatDialog, MatDialogRef } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';
import { ServiceService } from '../service.service';
import { ToasterService } from '../toaster.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  allprodctdetail:any;


  constructor(public dialog:MatDialog,private srv : ServiceService,private toasterService:ToasterService) { }

  ngOnInit() 
  {
    this.showall();

    $(document).ready(function(){
      $(".del").click(function(){
        $(this).parent().parent().css("background-color", "salmon"),
        setTimeout(()=>{
          $(this).parent().parent().animate({
            opacity:"0.2"
          }, () => {
            $(this).parent().parent().remove();
          })
        },1000);
      });
    });

  }

  
  addProduct()
  {
    let dialogRef = this.dialog.open(AddProductComponent, {
      height: '800px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe((data) => {
      if(data.more[0].p_name != "")
      {
        this.srv.submit(data).subscribe((data) => {
          if(data.status == 200)
          {
            this.toasterService.successToaster(data.msg.str1, data.msg.str2);
            this.showall();
          }
          else{
            this.toasterService.errorToaster(data.msg.str1, data.msg.str2);
          }
        });
      }
    });
  
  }

  showall() {
    this.srv.getProducts().subscribe((res) => {
      if(res.status == 200 )
      {
        this.allprodctdetail = res.details;
      }

    });

}
}
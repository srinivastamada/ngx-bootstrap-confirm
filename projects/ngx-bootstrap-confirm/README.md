# NgxBootstrapConfirm


# Installation
```
npm install --save ngx-bootstrap ngx-bootstrap-confirm
```

or if you use yarn:

``` 
yarn add ngx-bootstrap ngx-bootstrap-confirm
```

# Usage
Import NgxBadwordsModule into your app's modules:
``` typescript
import { NgxBootstrapConfirmModule } from 'ngx-bootstrap-confirm';
 
@NgModule({
  imports: [
    NgxBootstrapConfirmModule
  ]
})
```

Import NgxBadwordsService into your app's components:

``` typescript
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm'

export class AppComponent implements OnInit {
  
  constructor(private ngxBootstrapConfirmService: NgxBootstrapConfirmService){
  }

  ngOnInit(){
    this.NgxBootstrapConfirmService.then((res:boolean)=>{
     if(res){
       console.log("Okay");
     } else {
         console.log("Cancel")
     }
    });
}
```

# SCSS
``` SCSS

.modal-dialog {
  width: 360px !important;
  margin-top: 120px;
  margin: 30px auto;
  .modal-content {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  .confirm {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    min-height: 150px;
    .content {
      padding: 20px;
      border-radius: 10px;
      background-color: #fff !important;
      font-weight: 700;
    }
    .buttons {
      padding: 10px 15px;
      float: right;
      button {
        margin-right: 10px;
      }
    }
  }
}

```


# License
The MIT License (MIT)
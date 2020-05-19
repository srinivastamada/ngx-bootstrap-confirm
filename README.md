# NgxBootstrapConfirm
 
Bootstrap confirm provider for Angular

# Demo
https://ngxconfirm.9lessons.info/


# Installation
```
npm install --save ngx-bootstrap ngx-bootstrap-confirm
```

or if you use yarn:

``` typescript
yarn add ngx-bootstrap ngx-bootstrap-confirm
```

# Usage
Import NgxBootstrapConfirmModule into your app's modules:
``` typescript
import { NgxBootstrapConfirmModule } from 'ngx-bootstrap-confirm';
 
@NgModule({
  imports: [
    NgxBootstrapConfirmModule
  ]
})
```

Import NgxBootstrapConfirmService into your app's components:

``` typescript
import { Component } from '@angular/core';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ngxBootstrapConfirmService: NgxBootstrapConfirmService){
  }

  action() {
    let options ={
      title: 'Sure you want to delete this comment?',
      confirmLabel: 'Okay',
      declineLabel: 'Cancel'
    }
    this.ngxBootstrapConfirmService.confirm(options).then((res: boolean) => {
      if (res) {
        console.log('Okay');
      } else {
        console.log('Cancel');
      }
    });
  }
}
}
```

Remove words from the blacklist

``` CSS
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

srinivas@9lessons.info
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit() {
    console.log(true);
  }

  obj1 = [
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
  ];

  obj2 = [
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
  ];

  obj3 = [
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
  ];

  obj4 = [
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
    { value: '', edit: false },
  ];

  name1 = 'Angular ';
  name2;

  changeEdit(type, index) {
    switch (type) {
      case 1:
        this.obj1[index].edit = true;
        break;

      case 2:
        this.obj2[index].edit = true;
        break;

      case 3:
        this.obj3[index].edit = true;
        break;
    }
  }

  copy(type) {
    switch (type) {
      case 1:
        this.resetEdit(this.obj2);
        this.obj1.forEach((e, index) => {
          if (e.edit) {
            this.obj2[index].edit = e.edit;
            this.obj2[index].value = e.value;
          }
        });
        break;

      case 2:
        this.resetEdit(this.obj3);
        this.resetEdit(this.obj1);
        this.obj2.forEach((e, index) => {
          if (e.edit) {
            this.obj3[index].edit = e.edit;
            this.obj3[index].value = e.value;
          }
        });
        break;

      case 3:
        this.resetEdit(this.obj2);
        this.resetEdit(this.obj4);
        this.obj3.forEach((e, index) => {
          if (e.edit) {
            this.obj4[index].edit = e.edit;
            this.obj4[index].value = e.value;
          }
        });
        break;
    }
  }

  resetEdit(obj) {
    return obj.forEach((e) => {
      e.edit = false;
    });
  }
}

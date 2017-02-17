import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

class Newsletter {
  contactname: string;
  contactemail: string;
  newstype: string;
}

@Component({
  templateUrl:'./app/shared/contact.component.html'
})

export class ContactComponent implements OnInit {
  model:Newsletter = new Newsletter();
  newstypes:Array<string>;
  hasBeenSubmitted: boolean;

  ngOnInit() {
  }

  register(form:NgForm, event:Event) {
    // ...
    event.preventDefault();
    this.hasBeenSubmitted = true;
    console.log(form.value.xyz);
  }

}

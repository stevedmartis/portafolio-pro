import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  scroll(id) {

    console.log('el id: ', id);
    const el = document.getElementById(id);
    el.scrollIntoView();
  }

}

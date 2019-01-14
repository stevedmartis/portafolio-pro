import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  jaja = "jaja"



scroll(id) {

  console.log('el id: ', id);
  const el = document.getElementById(id);
  el.scrollIntoView();
}
}



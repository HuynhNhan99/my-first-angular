import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'first-project-angular';
  inputType = 'text';

  onClick = () => {
    console.log('click');
  };
}

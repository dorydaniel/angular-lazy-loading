import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const numbers = [1, 2, 3, 4, 5];
    console.log(`numbers: ${numbers}`);

    let copyNumbers = numbers;
    copyNumbers.push(7);

    console.log(`numbers: ${numbers}`);
    console.log(`copyNumbers: ${copyNumbers}`);
    ////////////////////////////////////////////////
    let users = [1, 2, 3, 4, 5];
    console.log(`users: ${users}`);

    let copyUsers = [...users];
    copyUsers.push(7);

    console.log(`users: ${users}`);
    console.log(`copyUsers: ${copyUsers}`);
  }

  goToAbout() {
    window.location.assign('/about');
  }
}

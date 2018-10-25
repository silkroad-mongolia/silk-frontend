import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privateoffice',
  templateUrl: './privateoffice.component.html',
  styleUrls: ['./privateoffice.component.scss']
})
export class PrivateofficeComponent implements OnInit {
  firstName = 'awsdasd';
  lastName = 'qwdasdasd';
  userId = 123123;
  addr3 = 'adasdasd';
  addr4 = 'asdasdasd';
  addr5 = 'asdasdasd';
  phone = 123123213;

  profiles = [
    {name: 'profile', link: '/profile'},
    {name: 'yurunhii medeelel', link: '/profile/general'},
    {name: 'Миний захиалгууд', link: '/profile/order'},
  ];




  constructor() {

  }

  ngOnInit() {

  }

}

import {Component, OnInit} from '@angular/core';
import {Spaceship} from '../../services/models/spaceship';
import {StarwarsApiService} from '../../services/starwars-api.service';

@Component({
  selector: 'app-spaceships-detail',
  templateUrl: './spaceships-detail.component.html',
  styleUrls: ['./spaceships-detail.component.css']
})
export class SpaceshipsDetailComponent implements OnInit {

  spaceship: Spaceship;

  constructor(url: string, public swService: StarwarsApiService) {
    this.getSpaceship(url);
  }

  getSpaceship(url: string) {
    console.log('getting spaceship');
    this.swService.getSpaceship(url).subscribe((data: { url }) => {
      console.log(data);
      this.spaceship = data;
    });
  }

  ngOnInit() {
  }

}

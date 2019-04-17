import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Spaceship} from '../../services/models/spaceship';
import {StarwarsApiService} from '../../services/starwars-api.service';
import {Spaceships} from '../../services/models/spaceships';

@Component({
  selector: 'app-spaceships-overview',
  templateUrl: './spaceships-overview.component.html',
  styleUrls: ['./spaceships-overview.component.css']
})
export class SpaceshipsOverviewComponent implements OnInit {

  @Input() spaceship?: Spaceship;
  @Input() spaceships?: Spaceships;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter();


  constructor(public swService: StarwarsApiService) {
    this.getSpaceships();
  }

  ngOnInit() {
  }

  getSpaceship(url: string) {
    console.log('getting spaceship');
    this.swService.getSpaceship(url).subscribe((data: {url}) => {
      console.log(data);
      this.spaceship = data;
    });
  }

  getSpaceships() {
    console.log('getting spaceships');
    this.swService.getSpaceships().subscribe((data: { count: string, next: string, previous: string, results: Spaceship[] }) => {
      console.log(data);
      this.spaceships = data;
    });
  }


  getSpaceshipsByUrl(url: string) {
    console.log('getting spaceships');
    this.swService.getSpaceshipsByUrl(url).subscribe(
      (data: { count: string, next: string, previous: string, results: Spaceship[] }) => {
        console.log(data);
        this.spaceships = data;
      });
  }

}

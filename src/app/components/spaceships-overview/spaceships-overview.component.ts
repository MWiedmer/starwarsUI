import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Spaceship} from '../../services/models/spaceship';
import {StarwarsApiService} from '../../services/starwars-api.service';

@Component({
  selector: 'app-spaceships-overview',
  templateUrl: './spaceships-overview.component.html',
  styleUrls: ['./spaceships-overview.component.css']
})
export class SpaceshipsOverviewComponent implements OnInit {

  @Input() spaceship?: Spaceship;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter();


  constructor(public swService: StarwarsApiService) {
    this.getSpaceship();
  }

  ngOnInit() {
  }

  getSpaceship() {
    console.log('getting spaceship');
    this.swService.getSpaceship(15).subscribe((data: {}) => {
      console.log(data);
      this.spaceship = data;
    });
  }

}

import { Component } from '@angular/core';
import { Pesonne } from 'src/app/model/pesonne.model';
import { PersonnageService } from 'src/app/services/personnage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Personnage: Pesonne = new Pesonne;

  constructor(private service: PersonnageService) {

  }

  ngOnInit() {
    this.service.getprsonnage(1).subscribe((result: Pesonne) => {
        this.Personnage = result;
    });
  }

}

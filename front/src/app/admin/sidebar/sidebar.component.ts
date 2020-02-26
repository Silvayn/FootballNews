import { Component, OnInit } from '@angular/core';
import { ChampionnatsService } from 'src/app/services/championnats.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  championnats;
  constructor(private cS: ChampionnatsService) { }

  ngOnInit(): void {
    this.cS.getChampionnats().subscribe((data)=>{this.championnats = data})
  }

}

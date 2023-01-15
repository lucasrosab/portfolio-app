import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  title: string = "";

  ngOnInit(): void {
    this.title = "©2023 by Lucas Rosa";
  }
}

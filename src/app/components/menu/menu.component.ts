import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {ISocialMediaModel} from "../../model/social.media.model";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title: string = "";
  medias: ISocialMediaModel[] = [];

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.title = "Lucas Rosa"
    this.loadSocialMedias();
  }

  loadSocialMedias(): void {
    this.profileService.getSocialMedia().subscribe(social => this.medias = social);
  }
}

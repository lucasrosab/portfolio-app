import {Injectable} from '@angular/core';
import {ISocialMediaModel} from "../model/social.media.model";
import {Observable, of} from "rxjs";
import {socialMedia} from "../../assets/social-media";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor() {
  }

  getSocialMedia(): Observable<ISocialMediaModel[]> {
    return of(socialMedia);
  }
}

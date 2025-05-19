import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landingPage.component';
import { OurMenuComponent } from './our-menu/our-menu.component';

@Component({
  selector: 'app-main-content',
  imports: [LandingPageComponent, OurMenuComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}

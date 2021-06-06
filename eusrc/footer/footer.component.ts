import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faDiscord, faGithub, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { ApiService } from '../api.service';
import { StateService } from '../state.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public faDiscord = faDiscord;
  public faTwitter = faTwitter;
  public faBtc = faBtc;

  ngOnInit() {
   await this.stateService.init();
    await this.stateService.getGlobalStats();
  }

  get globalStats() {
    return this.stateService.globalStats;
  }
}

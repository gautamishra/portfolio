import { Component, OnInit } from '@angular/core';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  faBriefCase = faBriefcase;
  faGraduationCap = faGraduationCap;

  constructor() { }

  ngOnInit(): void {
  }

}

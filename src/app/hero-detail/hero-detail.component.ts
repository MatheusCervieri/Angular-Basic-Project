import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Hero } from '../interfaces/hero.interfaces';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf, FormsModule, CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}

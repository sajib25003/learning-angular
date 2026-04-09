import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}

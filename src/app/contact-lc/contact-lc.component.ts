import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact-lc',
  imports: [RouterOutlet],
  templateUrl: './contact-lc.component.html',
  styleUrl: './contact-lc.component.css'
})
export class ContactLcComponent {
  isDark = false;

  toggleDarkMode() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme', this.isDark);
  }
}

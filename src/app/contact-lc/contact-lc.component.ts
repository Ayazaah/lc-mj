import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-lc',
  imports: [],
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

import { Component, ViewChildren, ElementRef, QueryList, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('img') imageRefs!: QueryList<ElementRef<HTMLImageElement>>;
  currentSlide = 0;
  intervalId: any;

  ngAfterViewInit(): void {
    this.showSlide(this.currentSlide);

    // ➤ Lance le défilement automatique toutes les 5 secondes
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  showSlide(index: number): void {
    const images = this.imageRefs.toArray().map(ref => ref.nativeElement);
    images.forEach(img => img.classList.remove('active'));
    this.currentSlide = (index + images.length) % images.length;
    images[this.currentSlide].classList.add('active');
  }

  nextSlide(): void {
    this.showSlide(this.currentSlide + 1);
  }
}

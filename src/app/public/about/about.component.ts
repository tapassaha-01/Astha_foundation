import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  private countingElement!: HTMLElement;
  private isCounting = false;
  cousesCount = 0; // Property to hold the counting value
  eventCount = 0;
  volunteersCount = 0;
  donationsCount = 0;
  isScrolledTo100px = false;
  scrollY!: any;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isCounting && this.isElementInViewport() && scrollY >= 100) {
      const scrollY = window.scrollY;
      console.log(scrollY);
      this.isCounting = true;
      this.startCounting();
    }
  }

  private isElementInViewport(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  private startCounting() {
    this.countingElement =
      this.el.nativeElement.querySelector('.speakers-talk');
    if (!this.countingElement) return;

    let volunteersCount = 0;
    let donationsCount = 0;
    let eventCount = 0;
    let cousesCount = 0;
    
    const countingInterval = setInterval(() => {
      if (volunteersCount <= 70) {
        this.volunteersCount = volunteersCount;
        volunteersCount++;
      }
    
      if (donationsCount <= 50) {
        this.donationsCount = donationsCount;
        donationsCount++;
      }
    
      if (eventCount < 26) {
        this.eventCount = eventCount;
        eventCount++;
      }
    
      if (cousesCount < 19) {
        this.cousesCount = cousesCount;
        cousesCount++;
      }
    
      if (volunteersCount >= 20 && donationsCount >= 50 && eventCount >= 27 && cousesCount >= 19) {
        clearInterval(countingInterval);
        this.isCounting = false;
      }
    }, 50); // Adjust the interval for your desired counting speed.
  }    
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import { ScrollService } from '../scroll.service';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FloorPipe } from '../floor.pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FloorPipe],
})
export class HomeComponent {
  isHovered = false;
  titlBody: string =
    'Together, we can change lives and create a brighter future.';
  titleText: string = '';
  index = 0;
  EventName: string = 'Clothes Distribution at Nibedita Sikhya Prangon.';
  EventDate: string = '25th August, 2023 at 11 am IST';
  EventPlace: string = 'Shrirampur, Hooghly';

  targetDate: Date = new Date('2023-12-31T23:59:59'); // Replace with your target date and time
  remainingTime!: number;
  countdownInterval: any;

  ngOnInit(): void {
    this.updateTime();
    this.countdownInterval = setInterval(() => {
      this.updateTime();
    }, 1000);

    this.countdownInterval = setInterval(() => {
     this.updateText()
     
    }, 80);
  }
updateText(){

    this.titleText += this.titlBody.charAt(this.index++);
  
  
}
  deleteText() {
    setInterval(() => {
      this.titleText = this.titleText.substring(0, this.index--);
    }, 80);
  }
  updateTime(): void {
    const currentTime = new Date();
    const timeDifference = this.targetDate.getTime() - currentTime.getTime();
    this.remainingTime = Math.max(timeDifference / 1000, 0);
  }
  // faFacebook = faFacebookF;
  // ngAfterViewInit() {
  //   this.scrollService.scrollEvent$.subscribe(() => {
  //     this.scrollToComponent();
  //   });
  // }
  // scrollToComponent() {

  //   // this.componentToScroll.nativeElement.scrollIntoView({ behavior: 'smooth' });
  // }
}

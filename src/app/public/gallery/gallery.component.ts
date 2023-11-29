import { Component } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  dummyPictures=[
    { src: '../../../assets/coursel_img/shafin-ashraf-eCqiA4HvlIs-unsplash.jpg' },
    { src: '../../../assets/coursel_img/sanjoy-sadhukhan-QPnbS4qB4lI-unsplash.jpg' },
    { src: '../../../assets/coursel_img/marwan-ahmed-nr5xEjOtiMA-unsplash.jpg' },
    { src: '../../../assets/coursel_img/loren-joseph-XoBWUBA3Amg-unsplash.jpg' },
    { src: '../../../assets/coursel_img/aman-shrivastava-w6caoaJzXIE-unsplash.jpg' },
{src:'../../../assets/coursel_img/atul-pandey-0f3bZHXZSz8-unsplash.jpg'}

  ]
  masonryImages:any;
  limit=3;
//   photos: any[] = [
//     { src: '../../../assets/coursel_img/shafin-ashraf-eCqiA4HvlIs-unsplash.jpg' },
//     { src: '../../../assets/coursel_img/sanjoy-sadhukhan-QPnbS4qB4lI-unsplash.jpg' },
//     { src: '../../../assets/coursel_img/marwan-ahmed-nr5xEjOtiMA-unsplash.jpg' },
//     { src: '../../../assets/coursel_img/loren-joseph-XoBWUBA3Amg-unsplash.jpg' },
//     { src: '../../../assets/coursel_img/aman-shrivastava-w6caoaJzXIE-unsplash.jpg' },
// {src:'../../../assets/coursel_img/atul-pandey-0f3bZHXZSz8-unsplash.jpg'}
//   ];
  public masonryOptions: NgxMasonryOptions = {
		gutter: 0,
		resize: true,
		initLayout: true,
		fitWidth: true
	};
  ngOnInit() {
		this.masonryImages = this.dummyPictures.slice(0, this.limit);
	}

	showMoreImages() {
		this.limit += 4;
		this.masonryImages = this.dummyPictures.slice(0, this.limit);
	}
}

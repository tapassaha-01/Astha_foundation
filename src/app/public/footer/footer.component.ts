import { Component } from '@angular/core';
import { faInstagram,faTwitter,faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent {
  faInstagram = faInstagram;
  faFacebook = faFacebookF;
  faTwitter = faTwitter;
}

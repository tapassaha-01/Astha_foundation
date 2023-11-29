import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MatIconModule } from '@angular/material/icon';
// import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { AboutComponent } from './about/about.component';
import { ScrollService } from './scroll.service';
import { FloorPipe } from './floor.pipe';
import { EventsComponent } from './events/events.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
@NgModule({
  providers: [ScrollService],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutComponent,
    FloorPipe,
    EventsComponent,
    GalleryComponent,
    TestimonialsComponent,
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatIconModule,
    NgxMasonryModule,
    // FontAwesomeModule,
    FontAwesomeModule
  ],
 
  // providers: [FaIconLibrary]
})
export class PublicModule { 
 
 

}

import { Component,Input } from '@angular/core';
import { LightboxComponent } from '../lightbox/lightbox.component';

@Component({
  selector: 'app-card-photo',
  imports: [LightboxComponent],
  templateUrl: './card-photo.component.html',
  styleUrl: './card-photo.component.css'
})
export class CardPhotoComponent {
 @Input() photo: any|null = null;

 lightboxOpen = false;
  selectedImage = '';

  openLightbox(url: string) {
    this.selectedImage = url;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.selectedImage = '';
  }
}

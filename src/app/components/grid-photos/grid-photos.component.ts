import { Component,Input } from '@angular/core';
import { CardPhotoComponent } from '../card-photo/card-photo.component';

@Component({
  selector: 'app-grid-photos',
  imports: [CardPhotoComponent],
  templateUrl: './grid-photos.component.html',
  styleUrl: './grid-photos.component.css'
})
export class GridPhotosComponent {
 @Input() photos: any[] = [];
}

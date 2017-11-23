import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArtistComponent, ArtistListComponent, ArtistDetailComponent]
})
export class ArtistModule { }

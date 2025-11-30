import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar-header',
  imports: [FaIconComponent],
  templateUrl: './side-bar-header.html',
  styleUrl: './side-bar-header.scss',
})
export class SideBarHeader {
  protected readonly faEllipsisVertical = faEllipsisVertical;
}

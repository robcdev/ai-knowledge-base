import { Component, input, Input } from '@angular/core';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { MenuAlignment, MenuItem } from './types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-context-menu',
  imports: [CdkMenu, CdkMenuItem, CdkMenuTrigger, FaIconComponent, NgClass],
  templateUrl: './context-menu.html',
  styleUrl: './context-menu.scss',
})
export class ContextMenu {
  menuItems = input.required<MenuItem[]>();
  alignment = input<MenuAlignment>('end');
  protected readonly faEllipsisVertical = faEllipsisVertical;
}

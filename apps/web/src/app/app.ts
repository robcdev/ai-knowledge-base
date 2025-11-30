import { Component, signal } from '@angular/core';
import { SideBar } from './shared/components/side-bar/side-bar';
import { MainContainer } from './shared/components/main-container/main-container';

@Component({
  selector: 'app-root',
  imports: [SideBar, MainContainer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('web');
}

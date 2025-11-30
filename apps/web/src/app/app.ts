import { Component, inject, signal } from '@angular/core';
import { SideBar } from './shared/components/side-bar/side-bar';
import { MainContainer } from './shared/components/main-container/main-container';
import { ContextFilesStore } from './store/context-files.store';

@Component({
  selector: 'app-root',
  imports: [SideBar, MainContainer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('web');
  private readonly contextFilesStore = inject(ContextFilesStore);

  constructor() {
    // Load context files on app initialization
    this.contextFilesStore.loadContextFiles();
    console.log('App initialized - Context files loading...');
  }
}

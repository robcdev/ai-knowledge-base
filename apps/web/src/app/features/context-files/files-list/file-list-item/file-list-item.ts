import { Component, inject, input } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { ContextFile } from '../../../../shared/types/context-file';
import { ContextMenu } from '../../../../shared/components/context-menu/context-menu';
import { MenuItem } from '../../../../shared/components/context-menu/types';
import { faFilePen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ContextFilesStore } from '../../../../store/context-files.store';
@Component({
  selector: 'app-file-list-item',
  imports: [Card, ContextMenu],
  templateUrl: './file-list-item.html',
  styleUrl: './file-list-item.scss',
})
export class FileListItem {
  private contextFilesStore = inject(ContextFilesStore);
  item = input.required<ContextFile>();
  protected menuItems: MenuItem[] = [
    {
      label: 'Update file',
      icon: faFilePen,
      action: () => this.updateFile(),
    },
    {
      label: 'Delete file',
      icon: faTrashCan,
      action: () => this.deleteFile(),
    },
  ];

  deleteFile(): void {
    console.log('Delete file clicked');
    this.contextFilesStore.deleteContextFile(this.item().id);
  }

  updateFile(): void {
    console.log('Upload file clicked');
  }
}

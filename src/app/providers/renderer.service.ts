import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class RendererService {

  constructor(public electronService: ElectronService) {
    // const { Menu, MenuItem } = this.electronService.remote;
   // const menu = new Menu()
    // menu.append(new MenuItem({
    //   label: 'MenuItem1', click() {
    //     console.log('item 1 clicked')
    //   }
    // }))
    // menu.append(new MenuItem({ type: 'separator' }))
    // menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }))

  //   window.addEventListener('contextmenu', (e) => {
  //     e.preventDefault()
  //     menu.popup(this.electronService.remote.getCurrentWindow())
  //   }, false)
  }

}

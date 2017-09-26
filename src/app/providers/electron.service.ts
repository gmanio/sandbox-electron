import { Injectable } from '@angular/core';

import { ipcRenderer } from 'electron';
import * as childProcess from 'child_process';

@Injectable()
export class ElectronService {
  ipcRenderer: typeof ipcRenderer;
  childProcess: typeof childProcess;

  constructor() {
    // console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
    //
    // ipcRenderer.on('asynchronous-reply', (event, arg) => {
    //   console.log(arg) // prints "pong"
    // })
    //
    // ipcRenderer.send('asynchronous-message', 'ping')
    // if (this.isElectron()) {
    //   this.ipcRenderer = window.require('electron').ipcRenderer;
    //   this.childProcess = window.require('child_process');
    // }
  }

  isElectron = () => {
    // return window && window.process && window.process.type;
  }

}

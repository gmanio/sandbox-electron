import { AfterViewInit, Component } from '@angular/core';
import { ipcRenderer } from 'electron';
import 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg) // prints "pong"
    })
    ipcRenderer.send('asynchronous-message', 'ping')
  }
}

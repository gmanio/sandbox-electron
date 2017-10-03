import { AfterViewInit, Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

declare var window;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  constructor(public electronService: ElectronService) {

    // this.electronService.ipcRenderer.on('asynchronous-reply', (event, args) => {
    //   console.log(event);
    //   console.log(args);
    // })
  }

  ngAfterViewInit(): void {
    // let pong: string = this.electronService.ipcRenderer.sendSync('asynchronous-message');
    // console.log(pong);
    console.log('test');
  }

  onClickNative() {
    // this.electronService.ipcRenderer.send('asynchronous-message', 'ping');
    //
    // this.electronService.ipcRenderer.on('asynchronous-reply',()=>{
    //   let myNotification = new Notification('Title', {
    //     body: 'Lorem Ipsum Dolor Sit Amet'
    //   })
    //
    //   myNotification.onclick = () => {
    //     console.log('Notification clicked')
    //   }
    // });

    var constraints = {
      audio: true,
      video: {
        width: { ideal: 400 },
        height: { ideal: 300 }
      }
    };

    var video = document.querySelector('video');

    function handleSuccess(stream) {
      alert('success');
      window.stream = stream; // stream available to console
      video.src = window.URL.createObjectURL(stream);
    }

    function handleError(error) {
      console.log('navigator.getUserMedia error: ', error);
    }

    navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
  }
}

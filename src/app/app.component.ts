import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    posts = [
        {
            title: 'Mon premier Post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis vulputate venenatis. Vivamus a sagittis arcu.',
            loveIts: 1,
            created_at: new Date()
        },
        {
            title: 'Mon deuxieme Post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis vulputate venenatis. Vivamus a sagittis arcu.',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Encore un post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis vulputate venenatis. Vivamus a sagittis arcu.',
            loveIts: -1,
            created_at: new Date()
        }
    ];
}

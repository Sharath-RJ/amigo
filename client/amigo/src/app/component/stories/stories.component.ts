import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environment';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css',
})
export class StoriesComponent implements OnInit {
  liveUses: any;
  constructor(private _http: HttpClient) {}
  ngOnInit(): void {
    this._http.get(`${environment.apiUrl}/user/getLiveUsers`).subscribe(
      (data) => {
        this.liveUses = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  joinLive(link:string){
     window.location.href = link;
  }
}

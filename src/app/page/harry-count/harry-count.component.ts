import { Component, OnInit } from '@angular/core';
import { ApiHarryService } from 'src/services/api-harry.service';
import { Count } from 'src/models/Count';
import { Api_Harry } from 'src/services/Api_Harry';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-harry-count',
  templateUrl: './harry-count.component.html',
  styleUrls: ['./harry-count.component.scss']
})
export class HarryCountComponent implements OnInit {
arrayCount: Array<Count> = [];
  constructor(private _httpClient: ApiHarryService) { }

  ngOnInit(): void {
    this.getHarrycounts()
  }
  getHarrycounts(url: string = Api_Harry.rawUrl): void {
    this._httpClient.getRequest<Count[]>(url)
      .subscribe((jsonResponse) => {
        console.log(jsonResponse)
        this.arrayCount = jsonResponse;
       
      }

      );
}
}
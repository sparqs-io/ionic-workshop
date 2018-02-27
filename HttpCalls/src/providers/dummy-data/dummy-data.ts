import { HttpClient, HttpResponse, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DummyModel } from "../../shared/dummy.model";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the DummyDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DummyDataProvider {
  private url: string = "https://dummy-c3b15.firebaseio.com/dummy/-L6LbkD4EYrA5LIGh8tg.json";
  private dummies: Array<DummyModel> = [];
  constructor(private http: HttpClient) {
    console.log("Hello DummyDataProvider Provider");
  }

  fetchDummyData(): Observable<Array<DummyModel>> {
    const dummyData = this.http.get<Array<DummyModel>>(
      this.url
    )

    return dummyData;
  }

  pushDummyData(dummyModel: Array<DummyModel>): Observable<HttpResponse<any>> {
    const dummyData = this.http.put(this.url, dummyModel, {
      observe: 'response'
    });

    return dummyData;
  }
}

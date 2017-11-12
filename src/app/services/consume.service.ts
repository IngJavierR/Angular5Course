import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConsumeService {

    private _url: string = 'http://api.icndb.com/jokes/random';
    constructor(private _http: Http) {}

    getCities() {
        return this._http
            .get(this._url)
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    handleError(error: any) {
        console.log(error);
        return Observable.throw(error.json() || 'Server error');
    }
}

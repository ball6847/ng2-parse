import { ParseQueryObservable } from './QueryObservable';

export class Query extends Parse.Query {
  // overload Parse.Query.find make it Observable
  find(): ParseQueryObservable;
  find(options?: Parse.Query.FindOptions): Parse.Promise<{}[]>;
  find(options?: Parse.Query.FindOptions): any {
    // use classic backbone callback style, return promise
    if (options) {
      return super.find(options);
    }

    // when calling with no arguments, return Observable
    const observable = new ParseQueryObservable(this);

    super.find({
      success: results => observable.next(results),
      error: error => observable.error(error)
    });

    return observable;
  }
}

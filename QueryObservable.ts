import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Query } from './Query';

export class ParseQueryObservable extends ReplaySubject<Parse.Object[]> {
  constructor(private query: Query) {
    super(1);
  }

  watch(): ParseQueryObservable {
    const refresh = () => {
      this.query.find({
        success: results => this.next(results),
        error: error => this.error(error)
      });
    };

    this.query.subscribe()
      .on('create', refresh)
      .on('update', refresh)
      .on('delete', refresh);

    return this;
  }
}

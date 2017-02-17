import { Injectable } from '@angular/core';
import { Query } from './Query';

@Injectable()
export class ParseService {
  ACL = Parse.ACL;
  Analytics = Parse.Analytics;
  Cloud = Parse.Cloud;
  Config = Parse.Config;
  Error = Parse.Error;
  Events = Parse.Events;
  FacebookUtils = Parse.FacebookUtils
  File = Parse.File;
  GeoPoint = Parse.GeoPoint;
  // Object = Parse.Object;
  Promise = Parse.Promise;
  Push = Parse.Push;
  // Query = Query;
  Relation = Parse.Relation;
  Role = Parse.Role;
  Session = Parse.Session;
  User = Parse.User;

  constructor() {
    Parse.initialize('myAppId');
    Parse.serverURL = 'http://localhost:1337/';
  }

  Object(className?: string, options?: any): Parse.Object;
  Object(attributes?: string[], options?: any): Parse.Object;
  Object(className?, options?): Parse.Object {
    return new Parse.Object(className, options);
  }

  Query(classObject: string | Parse.Object): Query {
    return new Query(classObject);
  }

}

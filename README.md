Angular2 Parse Service
======================

Still in development. Currently only make Parse injectable to component.

Installation
============

You have to install from github for now.

```sh
npm install --save https://github.com/ball6847/ng2-parse.git
```

This will install `ng2-parse`, `parse` and `@types/parse` (my fork on github repo)

## Adding Parse as global dependency.

`ng2-parse` does not directly import `parse` from node_modules, instead it uses Parse from global scope.

To make Parse available globally, please add `"./node_modules/parse/dist/parse.js"` to `apps.scripts` section in `angular-cli.json`. (webpack implementation will be available shortly)

```
{
  ...
  "apps": [
    {
      ...
      "scripts": [
        "./node_modules/parse/dist/parse.js"
      ],
      ...
    }
  ],
  ...
}
```

Make sure the reference to `parse/dist/parse.js` is correct.

## Adding ParseService to your Application

In order to use ParseService in your application. You just need to provide it in your AppModule.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ParseService } from 'ng2-parse'; // <-- import ParseService

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ParseService], // <-- Provide ParseService
  bootstrap: [AppComponent]
})
export class AppModule { }
```

You can now start using `ng2-parse` service in your angular2 application.

Examples
========

Using ParseService in your app's component. All you need to do is injecting it via DI.

```typescript
import { Component } from '@angular/core';
import { ParseService } from 'ng2-parse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // inject ParseService
  constructor(private Parse: ParseService) {
  }
}

```

TODO
====

- Add webpack example.
- Add ParseConfig module.
- Add tests.

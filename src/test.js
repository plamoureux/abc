import {route} from 'skyy/web-components/pages/decorators';
import {Command} from './command';

@route('abc', {title: 'abc'})
export class Abc {
  message = 'GO!';
  
  constructor() {
    console.log('Abc | constructor');
  }
  
  doSomething() {
    new Command().run();
  }
}

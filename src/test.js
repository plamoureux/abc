import {route} from 'skyy/web-components/pages/decorators';
import {Command} from './command';

@route('test', {title: 'Test'})
export class Test {
  message = 'GO!';
  
  constructor() {
    console.log('Abc | constructor');
  }
  
  doSomething() {
    new Command().run();
  }
}
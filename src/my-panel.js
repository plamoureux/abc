import _ from 'lodash';

export class MyPanel {
  id = _.uniqueId();
  
  constructor() {
    console.log('MyPanel | constructor');
  }
  
  test3() {
    console.log('Test... !');
  }
}
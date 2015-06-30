System.register(['skyy/web-components/pages/decorators', './command'], function (_export) {
  'use strict';

  var route, Command, Test;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_skyyWebComponentsPagesDecorators) {
      route = _skyyWebComponentsPagesDecorators.route;
    }, function (_command) {
      Command = _command.Command;
    }],
    execute: function () {
      Test = (function () {
        function Test() {
          _classCallCheck(this, _Test);

          this.message = 'GO!';

          console.log('Abc | constructor');
        }

        var _Test = Test;

        _createClass(_Test, [{
          key: 'doSomething',
          value: function doSomething() {
            new Command().run();
          }
        }]);

        Test = route('test', { title: 'Test' })(Test) || Test;
        return Test;
      })();

      _export('Test', Test);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NCQUlhLElBQUk7Ozs7Ozs7O2dEQUpULEtBQUs7O3lCQUNMLE9BQU87OztBQUdGLFVBQUk7QUFHSixpQkFIQSxJQUFJLEdBR0Q7OztlQUZkLE9BQU8sR0FBRyxLQUFLOztBQUdiLGlCQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDbEM7O29CQUxVLElBQUk7Ozs7aUJBT0osdUJBQUc7QUFDWixnQkFBSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztXQUNyQjs7O0FBVFUsWUFBSSxHQURoQixLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQ2xCLElBQUksS0FBSixJQUFJO2VBQUosSUFBSTs7O3NCQUFKLElBQUkiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cm91dGV9IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMvcGFnZXMvZGVjb3JhdG9ycyc7XG5pbXBvcnQge0NvbW1hbmR9IGZyb20gJy4vY29tbWFuZCc7XG5cbkByb3V0ZSgndGVzdCcsIHt0aXRsZTogJ1Rlc3QnfSlcbmV4cG9ydCBjbGFzcyBUZXN0IHtcbiAgbWVzc2FnZSA9ICdHTyEnO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ0FiYyB8IGNvbnN0cnVjdG9yJyk7XG4gIH1cbiAgXG4gIGRvU29tZXRoaW5nKCkge1xuICAgIG5ldyBDb21tYW5kKCkucnVuKCk7XG4gIH1cbn0iXX0=
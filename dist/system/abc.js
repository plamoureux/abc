System.register(['skyy/web-components/pages/decorators', './command'], function (_export) {
  'use strict';

  var route, Command, Abc;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_skyyWebComponentsPagesDecorators) {
      route = _skyyWebComponentsPagesDecorators.route;
    }, function (_command) {
      Command = _command.Command;
    }],
    execute: function () {
      Abc = (function () {
        function Abc() {
          _classCallCheck(this, _Abc);

          this.message = 'GO!';

          console.log('Abc | constructor');
        }

        var _Abc = Abc;

        _createClass(_Abc, [{
          key: 'doSomething',
          value: function doSomething() {
            new Command().run();
          }
        }]);

        Abc = route('abc', { title: 'abc' })(Abc) || Abc;
        return Abc;
      })();

      _export('Abc', Abc);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NCQUlhLEdBQUc7Ozs7Ozs7O2dEQUpSLEtBQUs7O3lCQUNMLE9BQU87OztBQUdGLFNBQUc7QUFHSCxpQkFIQSxHQUFHLEdBR0E7OztlQUZkLE9BQU8sR0FBRyxLQUFLOztBQUdiLGlCQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDbEM7O21CQUxVLEdBQUc7Ozs7aUJBT0gsdUJBQUc7QUFDWixnQkFBSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztXQUNyQjs7O0FBVFUsV0FBRyxHQURmLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FDaEIsR0FBRyxLQUFILEdBQUc7ZUFBSCxHQUFHOzs7cUJBQUgsR0FBRyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyb3V0ZX0gZnJvbSAnc2t5eS93ZWItY29tcG9uZW50cy9wYWdlcy9kZWNvcmF0b3JzJztcbmltcG9ydCB7Q29tbWFuZH0gZnJvbSAnLi9jb21tYW5kJztcblxuQHJvdXRlKCdhYmMnLCB7dGl0bGU6ICdhYmMnfSlcbmV4cG9ydCBjbGFzcyBBYmMge1xuICBtZXNzYWdlID0gJ0dPISc7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnQWJjIHwgY29uc3RydWN0b3InKTtcbiAgfVxuICBcbiAgZG9Tb21ldGhpbmcoKSB7XG4gICAgbmV3IENvbW1hbmQoKS5ydW4oKTtcbiAgfVxufSJdfQ==
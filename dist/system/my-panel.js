System.register(['lodash'], function (_export) {
  'use strict';

  var _, MyPanel;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_lodash) {
      _ = _lodash['default'];
    }],
    execute: function () {
      MyPanel = (function () {
        function MyPanel() {
          _classCallCheck(this, MyPanel);

          this.id = _.uniqueId();

          console.log('MyPanel | constructor');
        }

        _createClass(MyPanel, [{
          key: 'test3',
          value: function test3() {
            console.log('Test... !');
          }
        }]);

        return MyPanel;
      })();

      _export('MyPanel', MyPanel);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1NBRWEsT0FBTzs7Ozs7Ozs7Ozs7QUFBUCxhQUFPO0FBR1AsaUJBSEEsT0FBTyxHQUdKO2dDQUhILE9BQU87O2VBQ2xCLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFOztBQUdmLGlCQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDdEM7O3FCQUxVLE9BQU87O2lCQU9iLGlCQUFHO0FBQ04sbUJBQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7V0FDMUI7OztlQVRVLE9BQU87Ozt5QkFBUCxPQUFPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY2xhc3MgTXlQYW5lbCB7XG4gIGlkID0gXy51bmlxdWVJZCgpO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ015UGFuZWwgfCBjb25zdHJ1Y3RvcicpO1xuICB9XG4gIFxuICB0ZXN0MygpIHtcbiAgICBjb25zb2xlLmxvZygnVGVzdC4uLiAhJyk7XG4gIH1cbn0iXX0=
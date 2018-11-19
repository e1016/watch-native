
// + - - - - - - - - - - - - +
// |	Watch Native 1.0     |
// |	@e1016 | Eliseo      |
// |	e10169610@gmail.com  |
// + - - - - - - - - - - - - +

var __old = {};

Object.prototype.watch = function (nod, cllbk) {
   __old[nod] = this[nod];
   Object.defineProperty(this, nod, {
      get: function () {
         return __old[nod]
      },
      set: function (__new) {
         cllbk(__new, __old[nod] || undefined)
         __old[nod] = __new
      }
   });
}

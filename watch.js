
// + - - - - - - - - - - - - +
// |	Watch Native 1.0     |
// |	@e1016 | Eliseo      |
// |	e10169610@gmail.com  |
// + - - - - - - - - - - - - +

Object.prototype.watch = function (nod, cllbk) {
   var __old = this[nod]
   Object.defineProperty(this, nod, {
      get: function () {
         return ___old
      },
      set: function (__new) {
         cllbk(__new, __old || undefined)
         __old = __new
      }
   });
}

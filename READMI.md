# Watch Native

1.0

Enable watch reactive feature with an extreamly light library, only **355 bytes**

## Link

```html
<script src="js/watch.js">
```
## Use
```js
// define any object
var person = {
	name: 'Eliseo',
	age: 20
}

// object.watch(node, callback())
person.watch('name', function() {
	// do something
})

// the callback recives two paramenters
// new value and old value in this order
person.watch('name', function (newVal, oldVal) {
	console.log('name was changed from ' + oldVal + ' to ' + newVal)
})
```

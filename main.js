console.log('main.js')

// demo1
var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
})

// v-bind:title
var app2 = new Vue({
	el: '#app2',
	data: {
		message: 'You loaded this page on' + new Date().toLocaleString()
	}
})

// v-if:seen
var app3 = new Vue({
	el: '#app3',
	data: {
		janson: true
	}
})

// v-for="todo in todos"
var app4 = new Vue({
	el: '#app4',
	data: {
		todos: [
			{text: 'javascript'},
			{text: 'Vue'},
			{text: 'Here'}
		]
	}
})

app4.todos.push({text: 'janson'})

// v-on:click="reverseMessage"
var app5 = new Vue({
	el: '#app5',
	data: {
		message: 'Hello, jonson'
	},

	methods: {
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
})


// v-model="message"
var app6 = new Vue({
	el: '#app6',
	data: {
		message: 'janson'
	}
})

// 另
var obj = {
	foo: 'bar'
}
var app7 = new Vue({
	el: '#app7',
	data: obj 
})

// 另 $ 作为前缀的方法，是为了区别与开发者自定义的方法

var data1 = {a: 1}
var vm1 = new Vue({
	el: '#app8',
	data: data1
})

// vm1.$data === data	// true
// vm1.$el === document.getElementById('app8')	// true

// vm.$watch('a', function(newValue, oldValue){
	// a 变化的时候这里就会调用
// })

// Life Circle hooks

// created 
//new Vue({
//	data: {
//		a: 1
//	},
//
//	created: function(){
//		// `this` pointes to the vm instance
//		console.log('a is : ' + this.a)
//	}
//})

// v=once
var app9 = new Vue({
	el: '#app9',
	data: {
		msg: 'hehe'
	}
})

// v-html
var app10 = new Vue({
	el: '#app10',
	data: {
		rawHtml: '<span style="color: red;">this should be red</span>'
	}
})


// v-bind:属性="xxx" 动态绑定 class
var app11 = new Vue({
	el: '#app11',
	data: {
		isActive: true,
		isGreen: true,
		test1: false,
		test2: true,
		color: '#d13511',
		size: '50px'
	}
})

// v-if  v-else-if v-else
var app12 = new Vue({
	el: '#app12',
	data: {
		type: 'C'	
	}
})


//
// Deque - Linked List Implementation
//

"use strict";

// Node "constructor" (JavaScript has no classes, everything is an object)
function Node(d, p, n) {
	// we start with an empty object

	// add members to the object
	this.data = d;
	this.prev = p;
	this.next = n;
}


// A deque is a double-ended queue. Access to items in a deque
// is only allowed at the front or the back of the queue.

// Deque "constructor"
function Deque() {
	// we start with an empty object

	// add members to the object (all members are public)

	// Commentary:
	// new Car(2) in JavaScript means create an empty object
	// and initialize it using the Car function with a parameter of 2
	// Example: x = new Car(2) translates into a two step process:
	//		x = {};				x refers to a newly created empty object
	//		Car.call(x, 2);		Call the Car function with x (the empty object) becoming "this" and 2 as the parameter
	//							Inside the Car function you can then tack on properties (fields) to the empty object.


	this.beginMarker = new Node(null, null, null);
	this.endMarker = new Node()
	this.beginMarker.next = this.endMarker;
	this.size = 0;
}

// Deque "methods" (all methods are public)
Deque.prototype = {

	isEmpty : function () {
		return this.size == 0;
	},

	// push(x) inserts item x on the front end of the deque
	push : function (x) {
		var newNode = new Node(x, this.beginMarker, this.beginMarker.next);
		this.beginMarker.next.prev = newNode;
		this.beginMarker.next = newNode;
		this.size = this.size + 1;
	},

	// pop() removes the front item from the deque and returns it
	// returns null if there is no element to return
	pop : function () {
		// your code goes here
		
		if (this.size != 0) {
			var temp = this.beginMarker.next.data;
			this.beginMarker.next.next.prev = this.beginMarker;
			this.beginMarker.next = this.beginMarker.next.next;
			this.size = this.size - 1;
			return temp;
		}
		return null;

	},

	// inject(x) inserts item x at the rear end of the deque
	inject : function (x) {
		// your code goes here
		var newNode = new Node(x, this.endMarker.prev, this.endMarker);
		this.endMarker.prev.next = newNode;
		this.endMarker.prev = newNode;
		this.size = this.size + 1;

	},

	// eject() removes the rear item from the deque and returns it
	// returns null if there is no element to return
	eject : function () {
		// your code goes here
		if (this.size != 0) {
			var temp = this.endMarker.prev.data;
			this.endMarker.prev.prev.next = this.endMarker;
			this.endMarker.prev = this.endMarker.prev.prev;
			this.size = this.size - 1;
			return temp;
		}
		return null;

	},

	// clear() removes all elements from the deque
	clear : function() {
		// your code goes here
		while (this.size > 0) {
			this.pop();
		}
	}

};


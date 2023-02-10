
//Implement stack using queue

class Stack{
    constructor()
    {
        this.queue1 = []
        this.queue2 = []
    }

    push(item)
    {
        this.queue1.push(item)
    }

    pop()
    {
        if (!this.queue1.length) return null;
        while (this.queue1.length > 1) {     
        this.queue2.push(this.queue1.shift());
        }
        this.queue1.shift();
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    display()
    {
        console.log(this.queue1);
    }
}


// ________leetcode__________


var MyStack = function() {
    this.queue = []
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {

       this.queue.push(x)
    console.log(this.queue);
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
     return this.queue.pop(this.queue.shift())
    
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[this.queue.length-1]

    
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length===null || this.queue.length===0
    
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */



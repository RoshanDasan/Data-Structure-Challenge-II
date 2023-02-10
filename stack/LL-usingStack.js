class LinkedList
{
    constructor()
    {
        this.stack = []
    }

    push(element)
    {
        this.stack.push({element, next:this.stack[this.stack.length-1]||null})
    }

    pop()
    {
        this.stack.pop()
    }

    display()
    {
        let currentNode = this.stack[this.stack.length-1]
        console.log(currentNode);

    }

    isEmpty()
    {
       return this.stack.length === 0
      
    }
    length()
    {
        return this.stack.length
    }
}


// without array

class Node
{
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}

class Stack
{
    constructor()
    {
    this.head = null
    }

    push(value)
    {
        let node = new Node(value)
        let currentNode = this.head

        if(currentNode==null)
        {
            this.head = node
        }else
        {
            while(currentNode.next)
            {
                currentNode = currentNode.next
            }
            currentNode.next = node
        
        }

       return this.head

    }
    pop()
    {
        let currentNode = this.head
        let previous

        if(currentNode==null)
        {
            return null
        }
        else{
            while(currentNode.next)
            {
                previous = currentNode
                currentNode = currentNode.next
            }
            previous.next = null
        }

      return this.head
    }
}


let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

stack.pop()
stack.pop()


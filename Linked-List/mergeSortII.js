class Node
{
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor()
    {
        this.head = 0
        this.tail = 0
    }

    add(value)
    {
        let node = new Node(value)
        let currentNode = this.head

        if(!currentNode)
        {
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node
            this.tail = node
        }
    }

    mergeSort()
    {
        this.head = this._mergeSort(this.head)
    }

    _mergeSort(head)
    {
        let currentNode = head

        if(!currentNode || !currentNode.next)
        {
            return currentNode
        }

        let middNode = this.getMid(currentNode)

        let left = middNode.next
        middNode.next = null
        let right = currentNode

        const leftSide = this._mergeSort(left)
        const rightSide = this._mergeSort(right)

        return this.merge(leftSide, rightSide)


    }

    getMid(node)
    {
        let fast = node
        let slow = node
        while(fast.next&&fast.next.next)
        {
            fast = fast.next.next
            slow = slow.next
        }
        return slow
    }

    merge(left, right)
    {
        let result
        if(!right)
        {
            return left
        }
        if(!left)
        {
            return right
        }
        if(left.value<=right.value)
        {
            result = left
            result.next = this.merge(left.next, right)
        }else{
            result = right
            result.next = this.merge(left, right.next)
        }

        return result
    }

    
    display()
    {
        let list = []
        let currentNode = this.head
        while(currentNode)
        {
            list.push(currentNode.value)
            currentNode=currentNode.next
        }
        console.log(list);
        return list
    }
    
}

let list = new LinkedList()

list.add(3)
list.add(4)
list.add(5)
list.add(1)
list.add(2)


list.mergeSort()
list.display()
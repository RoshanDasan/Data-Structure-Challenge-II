class Node{
    constructor()
    {
        this.children = {}
        this.end = false
    }
}

class Trie
{
    constructor()
    {
        this.root = new Node()
    }


    insert(word)
    {
      var root = this.root  
      
      for (let i = 0; i < word.length; i++) {
        let charToInsert = word[i]      
        
        if(!(charToInsert in root.children))
        {
            root.children[charToInsert] = new Node();
        }

        root = root.children[charToInsert]
      }
      root.end = true
    }

    isContain(word)
    {
        var current = this.root

        for (let i = 0; i < word.length; i++) {
            let chatToFind = word[i]
            if(!(chatToFind in current.children)) return false  
            current = current.children[chatToFind]          
        }
        return true
    }

    display()
    {
        let word = {}

        
    }
}

let trie = new Trie()

trie.insert("apple")



console.log(trie.isContain("apple"));

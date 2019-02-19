class NodeOfTree
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 

class BinarySearchTree 
{ 
    constructor() {
        // root of a binary seach tree 
        this.root = null; 
    } 
  
    // function to be implemented 
    insert(data) 
    {   // Creating a node and initailising  
        var newNode = new NodeOfTree(data);                 
        // root is null then node will 
        // be added to the tree and made root. 
        if(this.root === null) 
            this.root = newNode; 
        else
            // if has root
            this.insertNode(this.root, newNode); 
    } 
    // remove(data) 
                  
  
    // Helper function 
    // findMinNode() 
    // getRootNode() 
    // inorder(node) 
    // preorder(node)                
    // postorder(node) 
    // search(node, data) 
} 

// opssss... this is Ruby question..
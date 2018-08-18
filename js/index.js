console.log('Unival Tree!');

class Tree {

	constructor (value) {
		this.value = value;
		this.left;
		this.right;
		
	}
}

/*

	Node:
			 5
		   /   \
		  /     \
		 5	     5
	   /   \    /    
	  5     5  1   

	
	Output: 4


*/	  


const root = new Tree (5);

root.left = new Tree (5);

root.right = new Tree (5);

root.left.left = new Tree (5);

root.left.right = new Tree (5);

root.right.left = new Tree (1);

console.log(root.value);

console.log(root.left.value);

console.log(root.right.value);

console.log(root.left.left.value);

console.log(root.left.right.value);

console.log(root.right.left.value);



console.log('Unival Tree!');

// Tree Class 
class Tree {

	constructor (value) {
		this.value = value;
		// Left Node
		this.left;
		// Right Node
		this.right;
		
	}
}

/*

	Node:
			 5
		   /   \
		  /     \
		 5	     5
	   /   \    /  \  
	  5     5  1    •

	
	Output: 5


*/	  

// Create Tree as depicted above

const root = new Tree (5);

root.left = new Tree (5);

root.right = new Tree (5);

root.left.left = new Tree (5);

root.left.right = new Tree (5);

root.right.left = new Tree (1);

root.right.right = new Tree (null);


const countUnival = (root) => {

	if (root === null || root === undefined) { 
		return { totalCount: 0, unival: true}
	}
	// Unpackage total count and unival values from object and store in variables
	// Recursively checking for each Node
	const { totalCount:leftCount, unival: isLeftUnival } = countUnival(root.left);
	const { totalCount:rightCount, unival: isRightUnival } = countUnival(root.right);	
}







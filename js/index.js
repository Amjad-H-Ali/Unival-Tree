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


const howManyUnival = (root) => {

	const { count: totalCount, unival} = countUnival(root);

	return totalCount;
}


const countUnival = (root) => {

	if (root === null || root === undefined) { 
		return { count: 0, unival: true}
	}
	// Unpackage count and unival values from object and store in variables
	// Recursively checking for each Node
	const { count:leftCount, unival: isLeftUnival } = countUnival(root.left);
	const { count:rightCount, unival: isRightUnival } = countUnival(root.right);
	
	let isUnival = true;

	// If any of the following conditions are true, redefine isUnival to false

	// The parent Node is not a Unival tree if either of its children are false
	if ( !isLeftUnival || !isRightUnival ) { isUnival = false;}
	// If left child exist and not equal to parent, then not Unival
	if (root.left && root.left.value !== root.value) { isUnival = false;}
	// If right child exist and not equal to parent, then not Unival
	if (root.right && root.right.value !== root.value) { isUnival = false;}
	// If isUnival is still true, we add 1 because we have a unival tree.
	if (isUnival) {
		return { count: leftCount + rightCount + 1, unival: true}
	}
	// If not, then we only add whatever the children nodes values summed up to.
	else {
		return { count: leftCount + rightCount, unival: false}
	}

}








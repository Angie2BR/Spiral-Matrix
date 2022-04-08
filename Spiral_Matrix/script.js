let spiralOrder = (matrix) => {
	const result = [];
	let top = 0;
	let left = 0;
	let bottom = matrix.length - 1; // 2
	let right = matrix[0].length - 1; // 2
	const size = matrix.length * matrix[0].length; // 9
	console.log(bottom);
	while (result.length < size) {
		for (let i = left; i <= right; i++) {
			result.push(matrix[top][i]);
		}
		top++;
		for (let i = top; i <= bottom; i++) {
			result.push(matrix[i][right]);
		}
		right--;

		for (let i = right; i >= left; i--) {
			result.push(matrix[bottom][i]);
		}
		bottom--;

		for (i = bottom; i >= top; i--) {
			result.push(matrix[i][left]);
		}
		left++;
	}
	return result;
};

console.log(
	spiralOrder([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);

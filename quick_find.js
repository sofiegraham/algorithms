
//I am using for loops to gain an understanding of time complexity

class QuickFind {
	constructor(number) {
		this.array = new Array(number);
		for(var i = 0; i < this.array.length; i++) {
			this.array[i] = i;
		}

	}

	isConnected(idx1, idx2) {
		return this.array[idx1] === this.array[idx2]
	}

	union(idx1, idx2) {
		var toChange = this.array[idx2];
		var newValue = this.array[idx1];

		for(var i = 0; i < this.array.length; i++) {
			if(this.array[i] === toChange) {
				this.array[i] = newValue;
			}
		}
	}

}
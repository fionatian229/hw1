function move(d, s) {
	// d means movement direction
	// s means steps to move

	var steps = 0;

	if (d == "up") {
		while (steps < s) {
			up();
			steps = steps + 1;
		} 
	}

	if (d == "down") {
		while (steps < s) {
			down();
			steps = steps + 1;
		} 
	}

	if (d == "left") {
		while (steps < s) {
			left();
			steps = steps + 1;
		} 
	}

	if (d == "right") {
		while (steps < s) {
			right();
			steps = steps + 1;
		} 
	}
}


// Puzzle 1
move("down", 7);
move("right", 5);
move("up", 2);
move("right", 2);
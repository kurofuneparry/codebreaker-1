// Dot colors
colors = ['red', 'yellow', 'green',];

// Parts of the web page
lightDiv = document.getElementById('light');
dotsDiv = document.getElementById('dots');

// Makes a dot
function makeDot(color=colors[0], htmlClass='') {
	let dot = document.createElement('span');
	dot.className = htmlClass;
	dot.style.backgroundColor = color;
	return dot;
}

// Make the dots that change color
dots = [];
for (let i=0; i<colors.length; i++) { 
	// A dot is created
	let dot = makeDot('white', 'empty');
	dots.push(dot);
    
	// The dot is added to the page inside a div, so they stack vertically
	let d = document.createElement('div');
	d.appendChild(dot);
	lightDiv.appendChild(d);
}

// Changes the color of the given dot
function changeColor(dot, color) {
	// Reset all of the dots to 'white' and 'empty'
	for (let i=0; i<dots.length; i++) {
        	dots[i].style.backgroundColor = 'white';
		dots[i].className = 'empty';
    	} 
	
	// Change the color of the given dot
	dot.style.backgroundColor = color;
	dot.className = '';
}

// Add the clickable colored dots, one for each color in colors
for (let i=0; i < colors.length; i++) {
	let dot = makeDot(colors[i]);
	dot.onclick = function () {
		changeColor(dots[i], colors[i]);
	};
	dotsDiv.appendChild(dot);
	dot.onclick(); // Light up the dot now that it's added
}

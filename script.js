// //complete this code
// class Rectangle {
	
// }

// class Square extends Animal {}

// // Do not change the code below this line
// window.Rectangle = Rectangle;
// window.Square = Square;


class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	get width(){
		return this.width;
	}

	get height(){
		return this.height;
	}

	getArea(){
		return this.width * this.height;
	}
}


 class Square extends Rectangle {
  getPerimeter(){
	  return 4*width;
  }
 }

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;



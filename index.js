const square = {
    area: (a) => (a*a),
    perimeter : (a) => (4*a)
}

const calculatesquare = (a) => {
    console.log(`the value of a is ${a} and the area is ` + square.area(a) );
}

calculatesquare(5);
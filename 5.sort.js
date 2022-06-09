// Sort Method

// sort Method take 'call back' function as a input
// sort Method work as a loop, call a function which pass two values and compare it in array/object each time

// Write the numbers in ascending and descending order
// In previous methods, array are not changed
// In sort Method, array will be changed

const numbers = [5, 9, 1200, 400, 3000];
numbers.sort();      // JS sort as a string, not numbers, according to ASCII Codes
console.log(numbers);

// const string = ['zahid', 'amjad', 'shahid', 'fasih'];
// string.sort();      // JS sort as alphabetical order, capital leeter sort first, according to ASCII Codes
// console.log(string);

const numbers1 = [5, 9, 1200, 400, 3000];
numbers1.sort((a,b) => a-b);   // ascending order
console.log(numbers1) 

// if two numbers are 1200, 400
// a-b --> positive (greator then 0), then b will come first and so on

const numbers2 = [5, 9, 1200, 400, 3000];
numbers2.sort((a,b) => b-a);   // descending order
console.log(numbers2) 

////// EXAMPLE //////

// price highToLow and lowToHigh

const products = [
    {productId: 1, productName: 'p1', price: 400},
    {productId: 2, productName: 'p2', price: 300},
    {productId: 3, productName: 'p3', price: 500},
    {productId: 4, productName: 'p4', price: 700},
    {productId: 5, productName: 'p5', price: 200},
];
// lowToHigh
products.sort((a,b) => a.price - b.price);
console.log(products);

const result = products.slice(0).sort((a,b) => a.price - b.price);
console.log(result);




// ASCII Table
// Value :  ASCII Char

// 32	 space
// 33	!
// 34	"
// 35	#
// 36	$
// 37	%
// 38	&
// 39	'
// 40	(
// 41	)
// 42	*
// 43	+
// 44	,
// 45	-
// 46	.
// 47	/

// 48	0
// 49	1
// 50	2
// 51	3
// 52	4
// 53	5
// 54	6
// 55	7
// 56	8
// 57	9

// 58	:
// 59	;
// 60	<
// 61	=
// 62	>
// 63	?
// 64	@

// 65	A
// 66	B
// 67	C
// 68	D
// 69	E
// 70	F
// 71	G
// 72	H
// 73	I
// 74	J
// 75	K
// 76	L
// 77	M
// 78	N
// 79	O
// 80	P
// 81	Q
// 82	R
// 83	S
// 84	T
// 85	U
// 86	V
// 87	W
// 88	X
// 89	Y
// 90	Z

// 91	[
// 92	\  
// 93	]
// 94	↑  
// 95	←  
// 96	@  

// 97		a
// 98		b
// 99		c
// 100		d
// 101		e
// 102		f
// 103		g
// 104		h
// 105		i
// 106		j
// 107		k
// 108		l
// 109		m
// 110		n
// 111		o
// 112		p
// 113		q
// 114		r
// 115		s
// 116		t
// 117		u
// 118		v
// 119		w
// 120		x
// 121		y
// 122		z

// 123		{
// 124	    |
// 125		}


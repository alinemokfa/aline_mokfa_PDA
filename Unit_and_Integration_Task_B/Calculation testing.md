##Section B: JavaScript Calculator Testing


|This activity relates to the following Outcome and Knowledge/Skills:
|-----------------------------------------------------------------
|Outcome 4: Test programs using a range of approaches
|Carry out unit testing
|Carry out integration testing
|Check the software meets specified requirements and carry out User Acceptance Testing.

######There is another program in your USB stick.  Copy the files to your desktop and work on these. 

The program is a Javascript calculator to be able to perform simple arithmetic functions in a web browser

The code provided has a calculator object with functions to add, subtract, divide, and multiple given numbers to a previous total. This allows the user to chain multiple operations one after the other, and then ask for the total.

This is integrated into an HTML page that gives a 'calculator layout' of buttons which operate the functionality of the JavaScript.

The calculator object has properties to keep track of calculations as it performs them.

Check the README.md in the calculator code directory for instructions on how to run the code.


####Task 3: Unit Testing

You need to write unit tests to ensure that the majority of functions in the calculator operate correctly:

	calculator.add()
	calculator.subtract()
	calculator.multiply()
	calculator.divide()
	calculator.numberClick()
	calculator.operatorClick()
	calculator.clearClick()
	
	
####The program should correctly perform the following tasks:

	multiply 3x5 and get 15
	divide 21/7 and get 3
	add 1+4 and get 5
	subtract 7-4 and get 3
	concatenate multiple number button clicks
	chain multiple operations together
	clear the running total without affecting the calculation

Save your completed testing file onto the USB drive


####Task 4: Integration and Acceptance Testing

User requirements:
“As a user I want to be able to perform simple arithmetic functions in a web browser.”

Carry out integration and acceptance testing on the calculator code.  

You need to write integration/acceptance tests to ensure all of the units of code work together in the browser to perform as the user would wish.

You should test for the following:
 Do the number buttons work to update the display of the running total?
 Do each of the arithmetical operations work to update the display with the result of the operation?
 Can we chain multiple operations together?
 Does it work as expected for a range of numbers? (positive, negative, decimals, large numbers)
What does the code do in exceptional circumstances?
If you divide by zero, what is the effect?
Can you write a test to describe what you'd prefer to happen under this circumstance, and then correct to code to make that test pass.

Save your completed testing file onto the USB drive





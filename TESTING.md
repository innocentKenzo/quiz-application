# Testing

## Test 1: Normal Input

The quiz was completed normally by selecting answers for the questions.

**Result:** Passed

The application successfully calculated and displayed the final score and percentage.

Example result:
- Score: 9/10
- Percentage: 90%

## Test 2: No Answer Selected

The Next button was clicked without selecting an answer.

**Result:** Passed

The application displayed:

"Please select an answer before continuing."

The user was prevented from moving to the next question.

## Test 3: Previous Question

An answer was selected, the user moved to the next question, and then clicked Previous.

**Result:** Passed

The previously selected answer remained selected.

## Test 4: Restart Quiz

The quiz was completed and Restart Quiz was selected.

**Result:** Passed

The application returned to Question 1 and cleared the previous answers.

## Test 5: Previous Button on First Question

The Previous button was clicked while on Question 1.

**Result:** Passed

The application correctly remained on Question 1 because there was no previous question.
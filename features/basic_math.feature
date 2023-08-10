Feature: Simple Math
  In order to avoid any mistakes
  As a math dummy
  I want to be told the sum, difference, product and quotient of two numbers

Scenario: Add two numbers
  Given I have entered 50 into the calculator
  And I have entered 70 into the calculator
  When I press add
  Then the result should be 120 on the screen

Scenario: Subtract two numbers
  Given I have entered 180 into the calculator
  And I have entered 86 into the calculator
  When I press subtract
  Then the result should be 94 on the screen

Scenario: Multiply two numbers
  Given I have entered 8 into the calculator
  And I have entered 6 into the calculator
  When I press multiply
  Then the result should be 48 on the screen

Scenario: Divide two numbers
  Given I have entered 81 into the calculator
  And I have entered 9 into the calculator
  When I press divide
  Then the result should be 9 on the screen
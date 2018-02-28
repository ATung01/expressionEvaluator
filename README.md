# expressionEvaluator


The goal of this challenge was to evaluate a given mathematical expression.

The rules are:

1.  Expressions can be numbers or operator expressions (4 is an expression and so is - 3 1)
2.  Numbers evaluate to themselves (4 is 4)
3.  Operator expressions evaluate to an arithmetic computation of the two following sub-expressions. Which arithmetic computation we make is determined by the first token in the operator expression. The syntax is always <Operator> <Expression> <Expression>, so in + 1 2, + is the operator and 1 and 2 are the expressions to sum.
4.  The two operator types we'll support are + a b (evaluated as a + b) and - (evaluated as a - b)

+ 1 + 2 3 would evaluate to 6

Open the index.html in a new browser window to run.

$(function() {

  $("#expInput").submit(function( event ) {
    event.preventDefault();
    let input = $("#expString").val().split(" ")
    let result = expEval(input)
    console.log(result)
  });

});


function expEval(arrOfExp) {

  let numStack = []

  if (arrOfExp.length === 1) {
    return arrOfExp[0]
  }

 // it's conceptually easier for me to work on this array from the end to the beginning
  for (let i = arrOfExp.length; i >= 0; i--) {
    console.log(numStack)

    let a = parseInt(numStack.pop())
    let b = parseInt(numStack.pop())
    if (arrOfExp[i] === "+") {
      numStack.push(b + a)
    }
    else if (arrOfExp[i] === "-") {
      numStack.push(a - b)
    }
    else {
      numStack.push(b, a, arrOfExp[i])
    }
  }

  console.log(numStack)
  return numStack.pop()
}

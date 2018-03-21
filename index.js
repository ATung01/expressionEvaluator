$(function() {

  $("#expInput").submit(function( event ) {
    event.preventDefault();
    let input = $("#expString").val().split(" ")
    let result = expEval(input)
    console.log(result)
    appendResult(result)
  });

});

function appendResult(answer) {
  $('#expAnswer').remove()
  $('#expInput').append(`<div id="expAnswer">Your expression evaluated into: ${answer}</div>`)
}


function expEval(arrOfExp) {

  let numStack = []

  if (arrOfExp.length === 1) {
    return parseFloat(arrOfExp[0])
  }

 // it's conceptually easier for me to work on this array from the end to the beginning
  for (let i = arrOfExp.length; i >= 0; i--) {

    let a = parseFloat(numStack.pop())
    let b = parseFloat(numStack.pop())
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

  // this is a way to filter out the NaN's at the end
  // let endLength = numStack.length
  //
  // for (let i = 0; i < endLength; i++) {
  //   console.log(numStack)
  //   if (isNaN(numStack[0])) {
  //     numStack.splice(0, 1)
  //   }
  // }
  return numStack.pop()
}

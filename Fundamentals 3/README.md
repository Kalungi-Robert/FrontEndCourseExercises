![](README.jpg)

# WEB 101: JAVASCRIPT FUNDAMENTALS 3

[**Submission Instructions (Ctrl+Click to open in a new Tab)**](https://github.com/SocialHackersAcademy/FrontEndCourseExercises/#instructions)

## INSTRUCTIONS

Let's write some functions!  Write these in the `script` tag of a skeleton HTML file. If you've forgotten how to set it up, review the instructions from [__fundamentals 1__](https://athena.socialhackersacademy.org/topic/fundamentals-part-1/).

For now, just write each function and test the output with `console.log`.

1. Write a function called `add7` that takes one number and returns that number + 7.

2. Write a function called `multiply` that takes 2 numbers and returns their product.

3. Write a function called `capitalize` that takes a string and returns that string with _only_ the first letter capitalized.  Make sure that it can take strings that are lowercase, UPPERCASE or BoTh. __[*]__

4. Write a function called `lastLetter` that takes a string and returns the very last letter of that string __[*]__:
   1. `lastLetter("abcd")` should return `"d"`


**Copy and paste the code below**, inside a `script` tag in your HTML page, and try to complete the exercise by filling the body of the functions. On each of the first 4 functions, you must also write the answer to the question **What type of functions is the next one?**. Try to go through the theory again and answer with one of the following terms: `Function Declaration` / `Function Expression` / `Arrow Function`.

```js
// 1) Type of function? 
function add7(){
  //function add7(){
        var number =prompt("Pick a number");
        var NewNumber = 7 + parseInt(number);
        return (NewNumber);
}
add7();


// 2) Type of function?
const multiply = function(){
  function multiply (a) {
    return function (b) {
      return a * b;
    };
  };

console.log(multiply(4)(3));

//Type of function?
let capitalize = ()=>{
  func capitalizeFirstLetter() -> string {
    return self.prefix(1).capitalized + dropFirst()

  }
}

// 4) Type of function?
function lastLetter(){
  let str = "ROBERT KALUNGI";
  str.charAt(str.length-1);

}
```

Add the code in a new branch, in a new file named `fundamentals-3-quiz.html` and submit your Pull Request.

---

_Photo by Miguel Á. Padriñán from Pexels_
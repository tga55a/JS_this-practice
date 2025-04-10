// Problem 1
this.name = "Alex"

function introduce(name) {
    console.log(this.name);
  }
  introduce("Alex");
 
// Task:
// Replace the name reference inside the function with this.name. 
// Then assign this.name = "Alex" in the global scope before calling the function (ignore the parameter when testing this).

// Q: What is printed? Why does this.name work (or not) in this context?
  // A: "this.name" executes properly because "this" is essentially an alias for the "window" object, of which you are adding a new property ".name" Since "window" is accessible globally, the object (and consequently the ".name" property we created) can be accessed in all local scopes.

// Problem 2

function runArrow(greeting) {
  this.greeting = "Hello!"
    const arrowFunc = () => {
      console.log(this.greeting);
    };
    arrowFunc();
  }
  runArrow("Hello!");

  
//   Task:
//   Replace greeting with this.greeting and assign this.greeting = "Hello!"; before calling the outer function.
  
//   Q: What does this.greeting refer to here? Why doesn't it refer to the parameter anymore? 
      // A: This.greeting refers to the new ".greeting" property added to the window object. It doesn't refer to the parameter anymore because it never referred to the parameter to begin with.

// Problem 3

const display = {
    message: "This is from the object",
    show: function (param) {
      console.log(this.message);
    }
  };
  display.show("Passed argument");

//   Task:
// Replace param with this.message inside the function.

// Q: What is printed now? Why does this refer to the object? What happened to the argument?
  // A: "This is from the object" is printed now. "this" refers to the object because it is a special keyword used within an object to reference itself. The argument is still there, we just never use it in our local scope. 

// Problem 4

{/* <button id="myBtn">Click me</button> */}

  function handleClick(text) {
    console.log(this.text);
  }

  document.getElementById("myBtn").onclick = () => {
    this.text = "Clicked!"
    handleClick("Clicked!");
  };

// Task:
// Instead of passing "Clicked!", change handleClick() to use this.text, and assign this.text = "Clicked!"; inside the event function. Also try the same with an arrow function.

// Q: What does this.text refer to in each case? Why does the arrow function behave differently?\
  // A: this.text refers to "Clicked!" as we defined it. My guess for why the arrow function behaves differently is that it must be passing itself (the button) as a hidden argument to all the functions listed within it, as is done with objects.
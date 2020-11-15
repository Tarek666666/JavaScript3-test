1. In the project there was a house that did not have a lord. Which house was this? And what did you do to deal with this situation?

Yes , there was a house without a current lord, i have dealed with it using the try and catch, i logged a message into the console, and printed the error.





2. You could have used XMLHttpRequest, the library axios or the fetch API to get the data from the server. And you could have used callbacks, async/await and/or promises. What did you use and why?
(_TIP: There is no right way, all have their advantages and disadvantages. Explain your decision making listing the advantages/disadvantages of each technology/approach_)

i didn't use XMLHttpRequest cause i'm not intrested in supporting the old browsers, also i wanted to get the benefit of using the promise object ,
that's why i used fetch so i can handle my data eaisly using promises, also can catch my errors.
using axios is a good idea but since i had no time, i thought using fetch will be enough , but if i wanted to support also the old browsers then i would have
used axios, it will do the job for me, and uses xmlhttprequest when the browser doesn't support fetch. but for the test fetch was enough




3. Let's say you were a huge fan of Object Oriented Programming and the api offered the option to get all the data you needed at once. What classes would you make and what functions would they have?
(_TIP: You do not have to write out the implementation of the functions (but you can if it makes it easier to think it through)_)
(_TIP: If you are unsure between two decisions, then write a comment with the alternative you considered but decided against with arguments. There is again no one correct answer here, but we want to see you think in an OOP way_)
(_TIP: If you want the code highlighting, it is also fine to create a `.js` file and then write down here what file to look at_)

Example (taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    // get the area of the rectangle
  }

  calcArea() {
    // calculate the area of the rectangle
  }
}
```

i would make a class which has the properties those i need to handle and use , for example as the api of game of thrones i would make class
that has name , currentlord properties. for functions i would create a method getAllSwornMemebrsUrl , this method will get me the urls those i need
and return them. so i can use my method on the class to have them .
or maybe i would go for more advanced ideas, like creating a method which gets me the Urls of the swornmemeber and fetch one url randomly and give me back the result
i had this idea on my mind while im doing the test, but unfortunately the time was limited and i was stressed.




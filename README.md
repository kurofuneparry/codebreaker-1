# codebreaker-1

# Introduction


# 1 - Remaking the HTML
- Capture the index.html from the workshop project
- Title to "Traffic Code"
- Change CSS file name to style
- Change JS file name to script
- Change H1 to "Traffic Code"
- Add H3 with "Change the color!"
- Remove 'myDiv' and button
- Add div with id 'light'
- Add hr
- Add div with id 'dots'

# 2 - Remaking the styling
(Each of these to be done through console to demonstrate first)
- Remove p, button styling
- Remove .strike and .invisible styling
- Add hr
- Add span styling
    - Add an HTML span
    - Demonstrate style.backgroundColor in console
    - Demonstrate className in console
    - Remove the span after demonstration is completed
- Add .empty styling

# 3 - A review of arrays
- Build an array in the console
- Access the array of numbers in the console
- Build an array of color strings in the console
- Access elements in the array, then access letters of the elements also by indexing
- Acquire the length of the array, then push a new entry, then recheck the length
- Add a color string to the document
- Write a loop to alert out "The "+i+" color is "+colors[i]

# 4 - Creating DOM objects
- Remove the previously added HTML span
- Add DOM element in the active website with developer tools
- Select the dots div in console, change it's background color to black
    - Change it back to white in the developer tools
- Create a span, give it background color and class
    - Give backgroundColor and class
    - Add it to the 'dots' div with appendChild
- Manipulate it with the dev tools.
- Write code to select 'light' and 'dots' divs
- Write code to add a single dot in the javascript
- Run it

# 5 - Using functions
- Simple use of a function is for something that you do over and over
- Review code for making a dot
    - Take the code for the single created dot and put it into a function
    - Reload the page and use the function repeatedly in the console
- Write a loop in the javascript to make a lot of dots
    - Put that loop in another loop and discuss the multiples that are created
- Scoping and let keyword to make functions do what they do in private
    - Try without let
        - Show that dot isn't known
        - Then run the function and recheck for dot
    - Use the let keyword to keep things private in the function

# 6 - Using objects and arrays
- Add dots array to javascript and create dots
    - Return to console and show that the dots can be accessed from the array
- Change the colors of objects to imitate a traffic light

# 7 - Functions with parameters
- Change the background colors of the dots in developer tools
- Follow up by changing the colors of the dots in console
    - Do this naming the dots 'dot1' etc by variable name
    - Repeat this for more than one dot
- Copy the console code into javascript, and then make a function changeColor
    - Demonstrate that the function fails, because the script doesn't have a dot1
    - Hard code it to use certain elements in the array
    - Discuss the natural need for parameters in functions for different arguments
- Add a parameter for the dot being changed
    - Demonstrate in console that this function can change the color of any dot (use dot1, dot2 still)
    - Repeat this by just accessing the list of dots
- Add another parameter to changeColor for the color
    - Use this function to make the light work
    - Demonstrate that it fails if no color is given
    - Explain a default arument, and add a default color argument
    
# 8 - Adding the clickable dots
- Make a dot on the page clickable so that it alerts
- Make a dot in console that alerts when clicked and add it to the page
- Code this behavior into javascript to change the first color
    - Work this up to a loop
- Reload the page and add onclick to make the color start by default
    - Explain the effect of looping here
    
# 9 - Review
- Review the contents of the above videos
    - Learned HTML and CSS only to learn better coding
- Iteratively plan what you need to do, figure out how to do it, test it, and apply
    - There are better ways to work, like TDD
- Preview the next level



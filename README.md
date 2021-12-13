# StarWars-API-CodeTheDream
## Over View
In this small scale project there are a collection of pages that focus on displaying some general character information and a breif summary into who they are in the grand scheme of the Star Wars universe. In addition, to some details regarding the movie they both first appear in. The characters include Luke and Obi-wan, while the movie chosen is the first installment to the series, episode 4 "A New Hope".

### What was used?
- Javascript File 
  - a fetch rquest to collect the data
  - if statement that would throw an error so the catch is used if the response was not ok
  - chained fulfilling .then()'s to avoid messy nesting
  - created an empty array and variables that were attached to specific general information regrading the items being used
  - .push()'ed the variables into the empty array then added to a loop that would create li's then print the information onto them
  - one varibale of each item was excluded to throw as the title of the images being used

- HTML File
  - A simple skeleton was used to create each page
  - used hmtl tags with meaning as to better navigate the files, EX. section, main, article, nav, etc.
  - added classes to future proof code in the event of editting

- CSS File
  - used an element selector for the body have a set standard for the page that can be easily editted
  - a box-shadow property was used to make the header more attractive to view on first glance
  - ems & percentages where used instead of px due to it's flexability when adjusting the size of the window
  - styled the anchor tags so that they dont naturally stick out but are evident as links when hovered over in the p tag
  - display:inline-block for images and margin adjustment for general list so content fits better on page

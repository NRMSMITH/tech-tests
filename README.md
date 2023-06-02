# Tech Tests

This repo is designed to give you space and techniques to help students practise tech tests ahead of starting to interview. You should do these in check-ins with the students towards the end of the course.

Ideally they should only take 20-30 minutes long each.

You can choose whether they pseudo code, or you drive while they navigate.

Please do not share this repo with the students, as it should not be a replacement for katas.


## KATAS

### **sumOfAll**

-> rest operators

-> writing a test suite

-> could use .reduce if they are all put into an array


### backToFront

-> test suite is written for them - they should not change it

-> should utilise unshift

-> can use spread operators, or for loop with conditional logic and push

-> ideally, you want to see TDD

## **BEND**


### **reading-books-api**

Api link: https://reading-books-api.onrender.com/api/bookshops (might not work until you fix the seed file)

-> issues with the seed.js file

    -> wrong column names for insertBooks (book_title = book_name // book_author = book_writer)
    
    -> missing 'RETURNING *' on insertBookshops
    
-> sql injection in the selectBookshopById model

-> build getBookById endpoint

-> build error tests


## **FEND**


### Axolotl web page

-> create a single-page-app wireframe and component tree based off the webpage for the axolotl on the San Diego Zoo website: https://animals.sandiegozoo.org/animals/axolotl


### **Get Reading page**

User stories:

-> As a user, I should be able to toggle the 'Books' button so the books are visible and not visible

-> As a user, I should be able to access the data about 'Bookshops' when I click on the button.

-> As a user, when the buttons are toggled 'off' I should see them clearly


Challenges:

-> Use flexbox or grid to improve the UI when both books and bookshops are available

-> Implement a loading spinner that matches the theme of the app

-> The title should be the header

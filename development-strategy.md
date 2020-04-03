# BookList: development strategy

| Step Name | User Story | Changes in HTML | Changes in CSS | Change in JS |
| --- | --- | --- | --- | --- |
| __setup__ | I created the  folders structure with empty files. | I created `index.html` | nothing | nothing |
| __html__ |As a developer, I want my website to be well structured | Create the entire html structure of the app | nothing | nothing |
| __data__ | As a developer, I want to have a database and have access to it | Adding links for `data/book.js` | nothing | I created the `data/book.js` file  |
| __store__ | As a developer, I want to store user-entered books |  Adding links for `data/store.js` | nothing | I created the `data/store.js` file|
| __add book__ | As a user, I want to add books to the list |Adding links for `handlers.addBook` and `listeners/addBook.js`| nothing | I created the `handlers` object with a method `addBook` in it and the file `listeners/addBook.js`|
| __display books__ | As a user. I want to see the stored books |Adding links for `view\user-interface.js` | nothing | I created the `view\user-interface.js` file|
| __delete books__ | As a user, I want to delete stored books | Adding links for `listeners/deleteBook.js` | nothing | I created the `listeners/deleteBook.js` file and added the `deleteBook` method to handlers|

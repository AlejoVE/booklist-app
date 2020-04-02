const handlers = {
    addBook : function (e) {
         // Prevent actual submit
        e.preventDefault();
        
        // Get form values
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;

        // Validate
        if(title === '' || author === '' || isbn === '') {
            UI.showAlert('Please fill in all fields', 'danger');
        } else {
            // Instatiate book
            const book = new Book(title, author, isbn);
            console.log("Hola");

            // Add Book to UI
            UI.addBookToList(book);

            // Add book to store
            Store.addBook(book);

            // Show success message
            UI.showAlert('Book Added', 'success');

            // Clear fields
            UI.clearFields();
        };
    },


};
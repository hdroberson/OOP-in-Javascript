var books = [
    {
        title: 'Hamlet',
        author: 'William Shakespear',
        status: 'available'
    },
    {
        title: 'Star Wars',
        author: 'George Lucas',
        status: 'available'
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        status: 'unavailable'
    }
    ];
    
    
    for (var book of books) {
        if (book.status === 'available') {
            console.log('The book ' + book.title + ' is checked in.');
        } else {
            console.log('Sorry, the book ' + book.title + ' is checked out');
        }
    }

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        // this.author = author;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;
        this._state = 100;
    }

    set state(value) {
        if (value < 0) {
            return this._state = 0;
         } else if (value > 100) {
            return this._state = 100;
         } else {
            return this._state = value;
         }
    }

    get state() {
        return this._state;
    }
    

    fix () {

        return this.state = this.state * 1.5;
    }
}



class Magazine extends PrintEditionItem{
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}


class Book extends PrintEditionItem{
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author; 
        this.type = 'book';
    }
}

class NovelBook extends Book{
    constructor (name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'novel';
    }
}

class FantasticBook extends Book{
    constructor (name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'fantastic';
        
    }
}

class DetectiveBook extends Book{
    constructor (name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'detective';
        
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook (book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy (type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName); 
        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0]; 
        }
           return null;

    }
        
}

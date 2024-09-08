class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;

    }

    set state(newState = 100) {
        if (newState < 0) {
            return this.state = 0;
         } else if (state > 100) {
            return this.state = 100;
         } else {
            return this.state = newState;
         }
    }

    get state() {
        return this.state;
    }
    

    fix () {
        return this.state = this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem{
    constructor (name, releaseDate, pagesCount) {
        super(name);
        super(releaseDate);
        super(pagesCount);
        this.type = 'magazine';
    }
}


class Book extends PrintEditionItem{
    constructor (name, releaseDate, pagesCount, author) {
        super(name);
        super(releaseDate);
        super(pagesCount);
        this.type = 'book';
        this.author = author; 
    }
}

class NovelBook extends Book{
    constructor (name, releaseDate, pagesCount, author) {
        super(name);
        super(releaseDate);
        super(pagesCount);
        this.type = 'novel';
        this.author = author;
    }
}

class FantasticBook extends Book{
    constructor (name, releaseDate, pagesCount, author) {
        super(name);
        super(releaseDate);
        super(pagesCount);
        this.type = 'fantastic';
        this.author = author;
    }
}

class DetectiveBook extends Book{
    constructor (name, releaseDate, pagesCount, author) {
        super(name);
        super(releaseDate);
        super(pagesCount);
        this.type = 'detective';
        this.author = author;
    }
}
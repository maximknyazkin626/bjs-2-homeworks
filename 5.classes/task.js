class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  set state(newState) {
    if (newState < 0) {
      return (this._state = 0);
    } else if (state > 100) {
      return (this._state = 100);
    } else {
      return (this._state = newState);
    }
  }

  get state() {
    return this._state;
  }

  fix() {
    return (this._state = this._state * 1.5);
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name);
    super(releaseDate);
    super(pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author) {
    super(name);
    super(releaseDate);
    super(pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name);
    super(releaseDate);
    super(pagesCount);
    this.type = "novel";
    this.author = author;
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name);
    super(releaseDate);
    super(pagesCount);
    this.type = "fantastic";
    this.author = author;
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name);
    super(releaseDate);
    super(pagesCount);
    this.type = "detective";
    this.author = author;
  }
}

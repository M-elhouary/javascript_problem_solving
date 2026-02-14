

    function Book(title, author, pages, read_status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read_status = read_status;


            this.info =  function() {
                return ` ${this.title} by ${this.author}, ${this.pages}, ${this.read_status}} `; 
            }
    }


    const thehabbit =  new Book( 
        "The Hobbit",
        "J.R.R. Tolkien",
        295,
        "not read yet"

    )



    console.log(thehabbit.info());

    Object.getPrototypeOf();
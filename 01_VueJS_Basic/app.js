const app = Vue.createApp({
    data() {
        return {
            books: [
                {
                    title    : "Atomic Habits",
                    author   : "James Clear",
                    publisher: "Random House Business",
                    img      : "img/img_book_atomic_habits.jpg",
                    isFav    : true,
                },{
                    title    : "The Laws of Human Nature",
                    author   : "Robert Green",
                    publisher: "Penguin Books",
                    img      : "img/img_book_laws_of_human_nature.jpg",
                    isFav    : false,
                },{
                    title    : "Gone With The Wind",
                    author   : "Magret Mitchell",
                    publisher:  "Grand Central Publishing",
                    img      : "img/img_book_gone_with_the_wind.jpg",
                    isFav    : true,
                },
            ],

            showBook: true,
        }
    },

    methods: {
        IncreaseCount() {
            this.count++;
        }
    },

    computed: {
        filteredBooks() {
            return this.books.filter(book => {
                return book.isFav === true;
            })
        }
    }
});

app.mount('#app');

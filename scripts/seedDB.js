const mongoose = require("mongoose");
const database = require("./src/models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const seedDB = 
[{
    authors: ["Suzanne Collins"],
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "https://books.google.com/books/content?id=39iYWTb6n6cC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73W8btY1rRdx80FErEEJFeWuLwFeDVT7Rhdn1RczuLtFp0fI1cmpq5GdkweXIPBIhA2ePQ15uubbRQIFhLk3M2xduM7cmqjF6absbPsFGPCO14MeEnVw-rt_zAEIMqQqn7VUUGa",
    link: "https://books.google.com/books?id=39iYWTb6n6cC&dq=Harry+Potter&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwil66OM0M_lAhUOvVkKHT5OAT0Q6AEwAnoECAMQAg",
    title: "The Hunger Games"
  },
  {
    authors: ["J.K. Rowling"],
    description: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    image: "https://books.google.com/books/content?id=39iYWTb6n6cC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "https://books.google.com/books?id=39iYWTb6n6cC&dq=harry+potter+and+the+philosopher%27s+stone&hl=&source=gbs_api",
    title: "Harry POtter and the Philosopher's Stone"
  }
]
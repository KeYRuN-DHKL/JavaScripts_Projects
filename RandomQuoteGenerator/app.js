const quotes = [
 
  { text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke", category: "tech" },
  { text: "The science of today is the technology of tomorrow.", author: "Edward Teller", category: "tech" },
  { text: "It's not a faith in technology. It's faith in people.", author: "Steve Jobs", category: "tech" },
  { text: "The real problem is not whether machines think but whether men do.", author: "B.F. Skinner", category: "tech" },
  { text: "Technology is best when it brings people together.", author: "Matt Mullenweg", category: "tech" },
  { text: "The advance of technology is based on making it fit in so that you don't really even notice it.", author: "Bill Gates", category: "tech" },
  { text: "We are stuck with technology when what we really want is just stuff that works.", author: "Douglas Adams", category: "tech" },
  { text: "The internet is becoming the town square for the global village of tomorrow.", author: "Bill Gates", category: "tech" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", category: "tech" },
  { text: "The computer was born to solve problems that did not exist before.", author: "Bill Gates", category: "tech" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House", category: "tech" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson", category: "tech" },
  { text: "Software is a great combination of artistry and engineering.", author: "Bill Gates", category: "tech" },
  { text: "Technology trust is a good thing, but control is a better one.", author: "Stieg Larsson", category: "tech" },
  { text: "It's not that we use technology, we live technology.", author: "Godfrey Reggio", category: "tech" },
  { text: "Technology is nothing. What's important is that you have a faith in people.", author: "Steve Jobs", category: "tech" },
  { text: "The real danger is not that computers will begin to think like men, but that men will begin to think like computers.", author: "Sydney J. Harris", category: "tech" },
  { text: "Artificial intelligence is the new electricity.", author: "Andrew Ng", category: "tech" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay", category: "tech" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson", category: "tech" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman", category: "tech" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds", category: "tech" },
  { text: "The function of good software is to make the complex appear simple.", author: "Grady Booch", category: "tech" },
  { text: "Every great developer you know got there by solving problems they were unqualified to solve.", author: "Patrick McKenzie", category: "tech" },
  { text: "Premature optimization is the root of all evil.", author: "Donald Knuth", category: "tech" },
 
 
  { text: "It's not whether you get knocked down; it's whether you get up.", author: "Vince Lombardi", category: "sports" },
  { text: "Champions keep playing until they get it right.", author: "Billie Jean King", category: "sports" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky", category: "sports" },
  { text: "The more difficult the victory, the greater the happiness in winning.", author: "Pelé", category: "sports" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke", category: "sports" },
  { text: "Set your goals high, and don't stop till you get there.", author: "Bo Jackson", category: "sports" },
  { text: "I've failed over and over and over again in my life, and that is why I succeed.", author: "Michael Jordan", category: "sports" },
  { text: "Excellence is not a singular act but a habit. You are what you repeatedly do.", author: "Shaquille O'Neal", category: "sports" },
  { text: "The difference between the impossible and the possible lies in a person's determination.", author: "Tommy Lasorda", category: "sports" },
  { text: "You have to expect things of yourself before you can do them.", author: "Michael Jordan", category: "sports" },
  { text: "Winning isn't everything, but wanting to win is.", author: "Vince Lombardi", category: "sports" },
  { text: "Obstacles don't have to stop you. If you run into a wall, don't turn around and give up.", author: "Michael Jordan", category: "sports" },
  { text: "It ain't over till it's over.", author: "Yogi Berra", category: "sports" },
  { text: "Age is no barrier. It's a limitation you put on your mind.", author: "Jackie Joyner-Kersee", category: "sports" },
  { text: "The harder the battle, the sweeter the victory.", author: "Les Brown", category: "sports" },
  { text: "Persistence can change failure into extraordinary achievement.", author: "Matt Biondi", category: "sports" },
  { text: "Champions aren't made in gyms. Champions are made from something they have deep inside them.", author: "Muhammad Ali", category: "sports" },
  { text: "I hated every minute of training, but I said, don't quit. Suffer now and live the rest of your life as a champion.", author: "Muhammad Ali", category: "sports" },
  { text: "Pain is temporary. Quitting lasts forever.", author: "Lance Armstrong", category: "sports" },
  { text: "A champion is someone who gets up when they can't.", author: "Jack Dempsey", category: "sports" },
  { text: "If you don't have confidence, you'll always find a way not to win.", author: "Carl Lewis", category: "sports" },
  { text: "Float like a butterfly, sting like a bee.", author: "Muhammad Ali", category: "sports" },
  { text: "The only way to prove that you're a good sport is to lose.", author: "Ernie Banks", category: "sports" },
  { text: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice.", author: "Pelé", category: "sports" },
  { text: "You can't put a limit on anything. The more you dream, the farther you get.", author: "Michael Phelps", category: "sports" },
 
 
  { text: "The price of liberty is eternal vigilance.", author: "Thomas Jefferson", category: "politics" },
  { text: "Ask not what your country can do for you — ask what you can do for your country.", author: "John F. Kennedy", category: "politics" },
  { text: "Power tends to corrupt, and absolute power corrupts absolutely.", author: "Lord Acton", category: "politics" },
  { text: "In politics, if you want anything said, ask a man. If you want anything done, ask a woman.", author: "Margaret Thatcher", category: "politics" },
  { text: "Democracy is the worst form of government, except for all the others.", author: "Winston Churchill", category: "politics" },
  { text: "Government of the people, by the people, for the people, shall not perish from the earth.", author: "Abraham Lincoln", category: "politics" },
  { text: "The ballot is stronger than the bullet.", author: "Abraham Lincoln", category: "politics" },
  { text: "Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly, and applying the wrong remedies.", author: "Groucho Marx", category: "politics" },
  { text: "A nation that is afraid to let its people judge truth and falsehood is a nation that is afraid of its people.", author: "John F. Kennedy", category: "politics" },
  { text: "Injustice anywhere is a threat to justice everywhere.", author: "Martin Luther King Jr.", category: "politics" },
  { text: "The arc of the moral universe is long, but it bends toward justice.", author: "Martin Luther King Jr.", category: "politics" },
  { text: "Freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed.", author: "Martin Luther King Jr.", category: "politics" },
  { text: "Politics is not the art of the possible. It consists in choosing between the disastrous and the unpalatable.", author: "John Kenneth Galbraith", category: "politics" },
  { text: "It is not the man who has too little, but the man who craves more, that is poor.", author: "Seneca", category: "politics" },
  { text: "Politics is war without bloodshed while war is politics with bloodshed.", author: "Mao Zedong", category: "politics" },
  { text: "We must learn to live together as brothers or perish together as fools.", author: "Martin Luther King Jr.", category: "politics" },
  { text: "Nobody made a greater mistake than he who did nothing because he could only do a little.", author: "Edmund Burke", category: "politics" },
  { text: "Public opinion is the thermometer a monarch should constantly consult.", author: "Napoleon Bonaparte", category: "politics" },
  { text: "The best argument against democracy is a five-minute conversation with the average voter.", author: "Winston Churchill", category: "politics" },
  { text: "A right delayed is a right denied.", author: "Martin Luther King Jr.", category: "politics" },
  { text: "Liberty, when it begins to take root, is a plant of rapid growth.", author: "George Washington", category: "politics" },
  { text: "Politics, as a practice, whatever its professions, has always been the systematic organization of hatreds.", author: "Henry Adams", category: "politics" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "politics" },
  { text: "Strong people stand up for themselves, but stronger people stand up for others.", author: "Chris Gardner", category: "politics" },
  { text: "A government big enough to give you everything you want is strong enough to take everything you have.", author: "Gerald Ford", category: "politics" },
 
 
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "business" },
  { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates", category: "business" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "business" },
  { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller", category: "business" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser", category: "business" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau", category: "business" },
  { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", category: "business" },
  { text: "Don't worry about failure; you only have to be right once.", author: "Drew Houston", category: "business" },
  { text: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs", category: "business" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain", category: "business" },
  { text: "Business opportunities are like buses, there's always another one coming.", author: "Richard Branson", category: "business" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "business" },
  { text: "I never dreamed about success. I worked for it.", author: "Estée Lauder", category: "business" },
  { text: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin", category: "business" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford", category: "business" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb", category: "business" },
  { text: "Quality means doing it right when no one is looking.", author: "Henry Ford", category: "business" },
  { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn", category: "business" },
  { text: "Build a name for yourself by helping other people build theirs.", author: "Anonymous", category: "business" },
  { text: "There is only one boss: the customer.", author: "Sam Walton", category: "business" },
  { text: "The customer's perception is your reality.", author: "Kate Zabriskie", category: "business" },
  { text: "Price is what you pay. Value is what you get.", author: "Warren Buffett", category: "business" },
  { text: "It's fine to celebrate success, but it is more important to heed the lessons of failure.", author: "Bill Gates", category: "business" },
  { text: "Do not be embarrassed by your failures, learn from them and start again.", author: "Richard Branson", category: "business" },
  { text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg", category: "business" },
 
 
  { text: "Where there is love there is life.", author: "Mahatma Gandhi", category: "love" },
  { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn", category: "love" },
  { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle", category: "love" },
  { text: "We are most alive when we're in love.", author: "John Updike", category: "love" },
  { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott", category: "love" },
  { text: "Love is not about how much you say I love you, but how much you can prove that it's true.", author: "Anonymous", category: "love" },
  { text: "The greatest happiness of life is the conviction that we are loved.", author: "Victor Hugo", category: "love" },
  { text: "Whatever our souls are made of, his and mine are the same.", author: "Emily Brontë", category: "love" },
  { text: "I have decided to stick with love. Hate is too great a burden to bear.", author: "Martin Luther King Jr.", category: "love" },
  { text: "Love yourself first and everything else falls into line.", author: "Lucille Ball", category: "love" },
  { text: "There is always some madness in love. But there is also always some reason in madness.", author: "Friedrich Nietzsche", category: "love" },
  { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss", category: "love" },
  { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu", category: "love" },
  { text: "Love does not dominate; it cultivates.", author: "Johann Wolfgang von Goethe", category: "love" },
  { text: "The best love is the kind that awakens the soul.", author: "Nicholas Sparks", category: "love" },
  { text: "Love is an irresistible desire to be irresistibly desired.", author: "Robert Frost", category: "love" },
  { text: "True love stories never have endings.", author: "Richard Bach", category: "love" },
  { text: "A successful marriage requires falling in love many times, always with the same person.", author: "Mignon McLaughlin", category: "love" },
  { text: "In all the world, there is no heart for me like yours.", author: "Maya Angelou", category: "love" },
  { text: "Love is when the other person's happiness is more important than your own.", author: "H. Jackson Brown Jr.", category: "love" },
  { text: "Love recognizes no barriers.", author: "Maya Angelou", category: "love" },
  { text: "The real lover is the man who can thrill you by kissing your forehead.", author: "Marilyn Monroe", category: "love" },
  { text: "Where there is great love, there are always miracles.", author: "Willa Cather", category: "love" },
  { text: "Love is friendship that has caught fire.", author: "Ann Landers", category: "love" },
  { text: "If I know what love is, it is because of you.", author: "Hermann Hesse", category: "love" },
];

const quoteCard = document.querySelector("#quoteCard");
const quoteText = document.querySelector("#quoteText");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quoteCategory = document.querySelector("#quoteCategory");
const generatorBtn = document.querySelector("#generator");
const copyBtn = document.querySelector("#copy");
const categoryBtns = document.querySelectorAll(".category");

const PLACEHOLDER_TEXT = "Click New Quote to get started";

let currentCategory = "all";
let lastIndex = -1;


const getFilteredQuotes = () => {
    if (currentCategory === "all") return quotes;

    return quotes.filter(q => q.category === currentCategory);
};

const getRandomQuote = () => {                          
    const filteredQuotes = getFilteredQuotes();

    if (filteredQuotes.length === 1) {
        lastIndex = 0;                                    
        return filteredQuotes[0];
    }

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * filteredQuotes.length);   
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    return filteredQuotes[randomIndex];
};

const displayQuote = () => {
    const quote = getRandomQuote();                       
    if (!quote) return;

    quoteCard.classList.add("opacity-0");

    setTimeout(() => {
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `— ${quote.author}`;
        quoteCategory.textContent = quote.category;
        quoteCard.classList.remove("opacity-0");
    }, 300);
};


const updateActiveCategory = (clickedBtn) => {             
    categoryBtns.forEach(btn => {
        btn.classList.remove("bg-blue-600", "text-white");
        btn.classList.add("text-blue-600");
    });

    clickedBtn.classList.add("bg-blue-600", "text-white");
    clickedBtn.classList.remove("text-blue-600");
};



categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        currentCategory = btn.dataset.category;
        lastIndex = -1;
        updateActiveCategory(btn);
        displayQuote();
    });
});

generatorBtn.addEventListener("click", () => {
    displayQuote();
});

copyBtn.addEventListener("click", async () => {
    
    if (quoteText.textContent === PLACEHOLDER_TEXT) {
        copyBtn.textContent = "Nothing to copy";
        copyBtn.classList.remove("border-blue-600", "text-blue-600");
        copyBtn.classList.add("border-gray-400", "text-gray-400");

        setTimeout(() => {
            copyBtn.textContent = "Copy";
            copyBtn.classList.add("border-blue-600", "text-blue-600");
            copyBtn.classList.remove("border-gray-400", "text-gray-400");
        }, 2000);

        return;  
    }

    const textToCopy = `${quoteText.textContent} ${quoteAuthor.textContent}`;

    try {
        await navigator.clipboard.writeText(textToCopy);

        copyBtn.textContent = "Copied!";
        copyBtn.classList.remove("border-blue-600", "text-blue-600");
        copyBtn.classList.add("border-green-500", "text-green-500");

        setTimeout(() => {
            copyBtn.textContent = "Copy";
            copyBtn.classList.remove("border-green-500", "text-green-500");
            copyBtn.classList.add("border-blue-600", "text-blue-600");
        }, 2000);
    } catch (error) {
        copyBtn.textContent = "Failed to copy";
        copyBtn.classList.remove("border-blue-600", "text-blue-600");
        copyBtn.classList.add("border-red-500", "text-red-500");

        setTimeout(() => {
            copyBtn.textContent = "Copy";
            copyBtn.classList.add("border-blue-600", "text-blue-600");
            copyBtn.classList.remove("border-red-500", "text-red-500");
        }, 2000);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const allBtn = document.querySelector("[data-category='all']");

    if (allBtn) {
        updateActiveCategory(allBtn);
    }

    displayQuote();
});
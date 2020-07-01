class Hangman {
    constructor(word, numberOfGuesses) {
        this.word = word.toLowerCase().split('')
        this.numberOfGuesses = numberOfGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    calculateStatus() {
        const finished = this.word.every(letter =>  this.guessedLetters.includes(letter) || letter === ' ')

        if (this.numberOfGuesses === 0) {
            this.status = 'failed';
        } else if (finished) {
            this.status = 'finished';
        } else {
            this.status = 'playing'
        }
    }

    get statusText(){
        if (this.status === 'playing') {
            return `Wrong guesses left: ${this.numberOfGuesses}`
        } else if (this.status === 'failed'){
            return `Nice Try! The word was ${this.word.join('')}`
        } else {
            return `Great work! You guessed the Word.`
        }
    }

    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                return puzzle = puzzle + letter
            } else {
                return puzzle = puzzle + '*'
            }
        })

        return puzzle
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const badGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }
        if (isUnique) {
            // this.guessedLetters.push(guess)
            this.guessedLetters = [...this.guessedLetters, guess]
        }
        if (isUnique && badGuess) {
            this.numberOfGuesses = this.numberOfGuesses - 1
        } else if (this.numberOfGuesses === 0) {

        }

        this.calculateStatus()
    }
}

export { Hangman as default }










let currentNumber = 1;

export default function handler(req, res) {
    const { number } = req.body;

    if (number === currentNumber) {
        currentNumber++;
        res.status(200).json({ message: 'Correct! Your number was the next in sequence.' });
    } else {
        res.status(200).json({ message: 'Incorrect! Your number was not the next in sequence.' });
    }
}

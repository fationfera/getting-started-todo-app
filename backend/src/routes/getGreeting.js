const GREETINGS = [
    "1111!",
    "All hands on deck!",
    "Charting the course ahead!",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};

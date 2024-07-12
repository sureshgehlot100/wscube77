
const readSingleTeams = async (req, res) => {
    try {
        console.log(req.params);
        res.status(200).json({ message: 'data fetched successfully' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' })

    }
};
module.exports = readSingleTeams;
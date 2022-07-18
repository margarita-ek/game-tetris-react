const StatisticsTetris = require('../models/statistics');

class statisticsController {
    async postStatistics(req, res) {
        try {   
            const { score, rows, level } = req.body;
            const statistics = new StatisticsTetris({ score, rows, level, date, owner })
            await statistics.save();
            return res.status(200).json({ message: "Statistics save", status: 200 })            
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Error sending statistics' })
        }
    }
    
    async getStatistics(req, res) { 
        try {
            const statistics = await StatisticsTetris.find({ owner: req.user.userId })
            res.status(200).json(statistics)
        } catch (e) { 
            console.log(e)
            res.status(400).json({ message: "Error getting statistics" })
        }
    }
}

module.exports = new statisticsController()
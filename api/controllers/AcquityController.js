module.exports = {
    test: function(req, res) {
        return res.json({ recommendation: acquity.recommendation(4) });
    }
}
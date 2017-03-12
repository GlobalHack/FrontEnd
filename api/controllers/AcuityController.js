module.exports = {
    test: function(req, res) {
        return res.json({ recommendation: acuity.recommendation(4) });
    }
}
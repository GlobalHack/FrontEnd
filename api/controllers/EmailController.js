module.exports = {
    test: function(req, res) {
        emailer.sendInvite('hello@world.com')
        return res.json({ check: 'your console' });
    }
};
module.exports = {
    test: function(req, res) {
        return res.json({ response: emailer.sendInvite('hello@world.com') });
    }
};
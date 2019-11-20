

module.exports.logErrors = function (err, req, res, next) {
    console.log('Hier läuft was falsch.')
    console.error(err);
    next(err.stack);
};

module.exports.clientErrors = function (err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({error: 'Something failed!'});
    } else {
        next(err);
    }
};

module.exports.errorHandler = function (err, req, res, next) {
    res.status(500);
    res.json({error: err});
};
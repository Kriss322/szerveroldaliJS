const authMW = require('../middleware/auth/authMW');
const checkPassMW = require('../middleware/auth/checkPassMW');
const renderMW = require('../middleware/renderMW');
const delMatchMW = require('../middleware/match/delMatchMW');
const getMatchesMW = require('../middleware/match/getMatchesMW');
const getMatchMW = require('../middleware/match/getMatchMW');
const saveMatchMW = require('../middleware/match/saveMatchMW');
const delFishMW = require('../middleware/fish/delFishMW');
const getFishesMW = require('../middleware/fish/getFishesMW');
const getFishMW = require('../middleware/fish/getFishMW');
const saveFishMW = require('../middleware/fish/saveFishMW');

module.exports = function (app) {
    const objRepo = {};

    app.use('/',
        checkPassMW(objRepo),
        renderMW(objRepo, 'index'));

    app.get('/fish',
        authMW(objRepo),
        getFishesMW(objRepo),
        renderMW(objRepo, 'fishlista'));
    app.use('/fish/new',
        authMW(objRepo),
        saveFishMW(objRepo),
        renderMW(objRepo, 'fisheditnew'));
    app.use('/fish/edit/:fishid',
        authMW(objRepo),
        getFishMW(objRepo),
        saveFishMW(objRepo),
        renderMW(objRepo, 'fisheditnew'));
    app.get('/fish/del/:fishid',
        authMW(objRepo),
        getFishMW(objRepo),
        delFishMW(objRepo));

   app.get('/match/:fishid',
        authMW(objRepo),
        getFishMW(objRepo),
        getMatchesMW(objRepo),
        renderMW(objRepo, 'egyfishmatchjei'));
    app.use('/match/:fishid/new',
        authMW(objRepo),
        getFishMW(objRepo),
        saveMatchMW(objRepo),
        renderMW(objRepo, 'matcheditnew'));
    app.use('/match/:fishid/edit/:matchid',
        authMW(objRepo),
        getFishMW(objRepo),
        getMatchMW(objRepo),
        saveMatchMW(objRepo),
        renderMW(objRepo, 'matcheditnew'));
    app.get('/match/:fishid/del/:matchid',
        authMW(objRepo),
        getFishMW(objRepo),
        getMatchMW(objRepo),
        delMatchMW(objRepo),
        renderMW(objRepo, 'matcheditnew'));

};
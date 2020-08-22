const { Router } = require('express');
const {userCtrl, apiCtrl} = require('../controllers');
const { isAuth } = require('../helpers/jwt');
const router = Router();

//user
router.post('/login', userCtrl.login);
router.post('/register', userCtrl.register);
router.post('/add-favorite', userCtrl.addFavorite);
router.post('/get-favorite', userCtrl.getFavorite);
router.delete('/delete-favorite', userCtrl.deleteFavorite);
//animeFlv api
router.post('/favoritos',isAuth, apiCtrl.favorite);
router.post('/categorias', apiCtrl.filter);
router.post('/searchAnime', apiCtrl.searchAnime);
router.post('/getEpisode', apiCtrl.getEpisodeList);
router.get('/info/:id', apiCtrl.info);
router.get('/rating', apiCtrl.rating);
router.get('/', apiCtrl.last20Animes);

module.exports = router;
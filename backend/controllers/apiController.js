const axios = require('axios')
const API = require('animeflv-scrapper')
const ctrl = {};

ctrl.favorite = async (req, res) => {
    const {animeName} = req.body;
    const anime = await API.getAnimeInfo(animeName);
    if(anime){
        res.setHeader("Set-Cookie", "HttpOnly; SameSite=none; Secure;");
        res.send({data: anime})
    }else{
        res.send({error: 'No pudimos encontrar el anime 😓'})
    }
}

ctrl.searchAnime = async (req, res) => {
    const {animeName} = req.body;
    const page = req.query.page ? Number(req.query.page) : 1
    const {data} = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${animeName}&page=${page}`);
    if(data.results){
        res.setHeader("Set-Cookie", "HttpOnly; SameSite=none; Secure;");
        res.send({data: data.results})
    }else{
        res.send({error: 'No pudimos encontrar el anime 😓'})
    }
}

ctrl.last20Animes = async (req, res) => {
    API.searchAnime('one piece').then(data => {
        console.log(data)
      })
}

ctrl.filter = async (req, res) => {
    const {genres, year, type, status, order} = req.body
    const params = {
        genres, 
        year, 
        type,
        status,
        order,
        page: req.query.page ? Number(req.query.page) : 1
    }
    const animes = await API.getAnimes(params);
    if(animes.length > 0){
        res.setHeader("Set-Cookie", "HttpOnly; SameSite=none; Secure;");
        res.send({data: animes});
    }else{
        res.send({error: 'No pudimos encontrar los animes 😓'})
    }
}

ctrl.info = async (req, res) => {
    const id = req.params.id;
    const {data} = await axios.get(`https://api.jikan.moe/v3/anime/${id}`);
    console.log(data)
    if(data){
        res.setHeader("Set-Cookie", "HttpOnly; SameSite=none; Secure;");
        res.send({data})
    }else{
        res.send({error: 'No pudimos encontrar los animes 😓'})
    }
}

ctrl.rating = async (req, res) => {
    const page = req.query.page ? Number(req.query.page) : 1
    const {data: {top}} = await axios.get(`https://api.jikan.moe/v3/top/anime/${page}`);
    if(top){
        res.setHeader("Set-Cookie", "HttpOnly; SameSite=none; Secure;");
        res.send({data: top})
    }else{
        res.send({error: 'No pudimos encontrar los animes 😓'})
    }
}

ctrl.getEpisodeList = async (req, res) => {
    const {id} = req.body
    const page = req.query.page ? Number(req.query.page) : 1
    const {data} = await axios.get(`https://api.jikan.moe/v3/anime/${id}/episodes/${page}`);
    console.log(data)
    if(data){
        res.setHeader("Set-Cookie", "HttpOnly; SameSite=none; Secure;");
        res.send({data})
    }else{
        res.send({error: 'No pudimos encontrar los animes 😓'})
    }
}

module.exports = ctrl
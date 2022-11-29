import * as tuitsDao from '../tuits/tuits-dao.js'
// import posts from './tuits.js';
// let tuits = posts;


const TuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);

}
const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.username = "NASA";
    newTuit.handle = "@nasa";
    newTuit.image = "nasa.jpg";
    newTuit.time = '2h';
    // tuits.push(newTuit);
    // res.json(newTuit);
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);

}
const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}



const deleteTuit = async(req, res) => {
    // const tuitdIdToDelete = req.params.tid;
    // tuits = tuits.filter((t) =>
    //     t._id !== tuitdIdToDelete);
    // res.sendStatus(200);
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    // tuits = tuits.filter((t) => t._id.toString() !== tuitIdToDelete);
    // res.sendStatus(200);
    res.json(status);
}


const updateTuit = async(req, res) => {
    // const tuitdIdToUpdate = req.params.tid;
    // const updates = req.body;
    // tuits = tuits.map(t =>
    //     String(t._id) === tuitdIdToUpdate ? {...t, ...updates} : t
    // );
    // res.sendStatus(200);
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex((t) => t._id.toString() === tuitIdToUpdate);
    // tuits[tuitIndex] = {...tuits[tuitIndex], ...update};
    // res.sendStatus(200);
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);

}


export default TuitsController





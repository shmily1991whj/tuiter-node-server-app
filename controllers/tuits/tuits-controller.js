import posts from './tuits.js';
let tuits = posts;


const TuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);

}
const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.username = "NASA";
    newTuit.handle = "@nasa";
    newTuit.image = "nasa.jpg";
    newTuit.time = '2h';
    tuits.push(newTuit);
    res.json(newTuit);
}
const findTuits = (req, res) => {
    res.json(tuits);
}

const deleteTuit = (req, res) => {
    // const tuitdIdToDelete = req.params.tid;
    // tuits = tuits.filter((t) =>
    //     t._id !== tuitdIdToDelete);
    // res.sendStatus(200);
    const tuitIdToDelete = req.params.tid;
    tuits = tuits.filter((t) => t._id.toString() !== tuitIdToDelete);
    res.sendStatus(200);
}


const updateTuit = (req, res) => {
    // const tuitdIdToUpdate = req.params.tid;
    // const updates = req.body;
    // tuits = tuits.map(t =>
    //     String(t._id) === tuitdIdToUpdate ? {...t, ...updates} : t
    // );
    // res.sendStatus(200);

    const tuitIdToUpdate = req.params.tid;
    const update = req.body;
    const tuitIndex = tuits.findIndex((t) => t._id.toString() === tuitIdToUpdate);
    tuits[tuitIndex] = {...tuits[tuitIndex], ...update};
    res.sendStatus(200);
}


export default TuitsController





const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const feedback = req.body;
    console.log(feedback);
    console.log('Feedback comments is', feedback.comments);
    
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

    pool.query(sqlText, [Number(feedback.feeling), Number(feedback.understanding), Number(feedback.support), feedback.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`ERROR in POST`, error);
            res.sendStatus(500);
        });
});


router.get('/', (req, res) => {
    console.log('in SERVER GET');
    pool.query('SELECT * FROM "feedback" ORDER BY "id" DESC;')
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) =>{
        console.log(`Error getting feedback !`, error);
        res.sendStatus(500);
    })
})

router.delete('/:id', (req,res) => {
    console.log('in SERVER DELETE');
    let feedbackId = req.params.id;
    console.log('Feedback ID is,', feedbackId);
    const sqlText = `DELETE FROM "feedback" WHERE "id" = $1;`
    pool.query(sqlText, [feedbackId])
    .then( (result) => {
        res.sendStatus(201);
    })
    .catch( (error) => {
        console.log('ERROR in DELETE', error);
        res.sendStatus(500);
    })
})


module.exports = router;
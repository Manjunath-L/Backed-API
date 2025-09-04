import { Router } from "express";
import authorize from "../middlewares/auth.middlewares.js";
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => { res.send({ title: 'GET all subscription' }) });

subscriptionRouter.get('/id', (req, res) => { res.send({ title: 'GET subscription detials' }) });

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => { res.send({ title: 'UPDATE subscription' }) });

subscriptionRouter.delete('/:id', (req, res) => { res.send({ title: 'DELETE subscription' }) });


subscriptionRouter.get('/user/:id', authorize, getUserSubscription);


subscriptionRouter.put('/:id/cancel', (req, res) => { res.send({ title: 'CANCEL subscription' }) });

subscriptionRouter.get('/upcoming-renewals', (req, res) => { res.send({ title: 'GET upcoming subscription' }) });



export default subscriptionRouter;
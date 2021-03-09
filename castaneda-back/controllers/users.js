import express from 'express';
import User from "../models/user.js";

const users = express.Router();

export const users_get = users.get('/users', async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        next(error);
    }
})

export const users_post = users.post('/users', async (req, res, next) => {
    try {
        let firstUser = await new User({
            login: 'Nina',
            pass: 'Xzza',
            role: 'Admin',
        });

        firstUser.save(err => {
            if (err) {
                next(err)
            }
        })

        firstUser = await new User({
            login: 'Petr',
            pass: 'Xzza',
            role: 'Admin',
        });

        firstUser.save(err => {
            if (err) {
                next(err)
            }
        })

        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            next(error);
        }
    } catch
    (e) {
        next(e);
    }
})

export const user_create = users.post('/user/create', async (req, res, next) => {
    try {
        const alreadyExistUser = await User.findOne({ login: req.body.login });
        if (!alreadyExistUser) {
            const newUser = await new User(req.body);
            newUser.save(err => {
                if (err) {
                    next(err);
                }
            })
        }
    } catch (err) {
        next(err)
    }
})

export const user_delete = users.delete('/users/:id', (req, res, next) => {
    try {
        User.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) {
                console.log('|-- user_delete: ' + err);
            } else {
                return res.json({ msg: "User Deleted" });
            }
        })
    } catch (error) {
        next(error)
    }
})

export const user_detail =  users.get('/users/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        if (user) {
            return res.json(user)
        }
    } catch (error) {
     next(error)   
    }
})

export const user_login = users.post('/login', async (req, res, next) => {
    try {
        const alreadyExistUser = await User.findOne({ login: req.body.login, pass: req.body.pass });
        if (alreadyExistUser) {
            res.json({"token": "token"})
        }
    } catch (error) {
        next(error)

    }
})

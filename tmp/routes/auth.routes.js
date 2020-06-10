"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();
// /api/auth/register
router.post('/register', [
    check('email', 'incorrect email').isEmail(),
    check('password', 'minimal length for password is 6 symbols').isLength({ min: 6 })
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'incorrect date at registration'
            });
        }
        const { email, password } = req.body;
        const candidate = yield User.findOne({ email });
        if (candidate) {
            return res.status(400).json({ message: 'user already exist' });
        }
        const hashedPassword = yield bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword });
        yield user.save();
        res.status(201).json({ message: 'user created' });
    }
    catch (e) {
        res.status(500).json({ message: 'something wrong' });
    }
}));
// /api/auth/login
router.post('/login', [
    check('email', 'enter correct email').normalizeEmail().isEmail(),
    check('password', 'minimal length for password is 6 symbols').isLength({ min: 6 })
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'incorrect date at login'
            });
        }
        const { email, password } = req.body;
        const user = yield User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'user does not exist' });
        }
        const isMatch = yield bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'incorrect password' });
        }
        const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), { expiresIn: '1h' });
        res.json({ token, userId: user.id });
    }
    catch (e) {
        res.status(500).json({ message: 'something wrong' });
    }
}));
module.exports = router;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const http_hook_1 = require("../hooks/http.hook");
exports.AuthPage = () => {
    const { loading, request } = http_hook_1.useHttp();
    const [form, setForm] = react_1.useState({
        email: '',
        password: ''
    });
    1;
    31;
    51 / 3;
    34;
    30;
    https: //www.youtube.com/watch?time_continue=2&v=ivDjWYcKDZI
     const changeHandler = e => {
        setForm(Object.assign(Object.assign({}, form), { [e.target.name]: e.target.value }));
    };
    const registerHandler = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield request('/api/auth/register', 'POST', Object.assign({}, form));
            console.log('Data', data);
        }
        catch (e) {
        }
    });
    return (react_1.default.createElement("div", { className: "row" }, react_1.default.createElement("div", { className: "col s6 offset-s3" }, react_1.default.createElement("h1", null, "\u0421\u043E\u043A\u0440\u0430\u0442\u0438 \u0441\u0441\u044B\u043B\u043A\u0443"), react_1.default.createElement("div", { className: "card blue darken-1" }, react_1.default.createElement("div", { className: "card-content white-text" }, react_1.default.createElement("span", { className: "card-title" }, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"), react_1.default.createElement("div", null, react_1.default.createElement("div", { className: "input-field" }, react_1.default.createElement("input", { placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email", id: "email", type: "text", name: "email", className: "yellow-input", onChange: changeHandler }), react_1.default.createElement("label", { htmlFor: "email" }, "Email")), react_1.default.createElement("div", { className: "input-field" }, react_1.default.createElement("input", { placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", id: "password", type: "password", name: "password", className: "yellow-input", onChange: changeHandler }), react_1.default.createElement("label", { htmlFor: "password" }, "\u041F\u0430\u0440\u043E\u043B\u044C")))), react_1.default.createElement("div", { className: "card-action" }, react_1.default.createElement("button", { className: "btn yellow darken-4", style: { marginRight: 10 }, disabled: loading }, "\u0412\u043E\u0439\u0442\u0438"), react_1.default.createElement("button", { className: "btn grey lighten-1 black-text", onClick: registerHandler, disabled: loading }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"))))));
};

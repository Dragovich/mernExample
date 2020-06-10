"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const LinksPage_1 = require("./pages/LinksPage");
const CreatePage_1 = require("./pages/CreatePage");
const DetailPage_1 = require("./pages/DetailPage");
const AuthPage_1 = require("./pages/AuthPage");
exports.useRoutes = isAuthentificated => {
    if (isAuthentificated) {
        return (react_1.default.createElement(react_router_dom_1.Switch, null, react_1.default.createElement(react_router_dom_1.Route, { path: "/links", exact: true }, react_1.default.createElement(LinksPage_1.LinksPage, null)), react_1.default.createElement(react_router_dom_1.Route, { path: "/create", exact: true }, react_1.default.createElement(CreatePage_1.CreatePage, null)), react_1.default.createElement(react_router_dom_1.Route, { path: "/detail/:id" }, react_1.default.createElement(DetailPage_1.DetailPage, null)), react_1.default.createElement(react_router_dom_1.Redirect, { to: "/create" })));
    }
    return (react_1.default.createElement(react_router_dom_1.Switch, null, react_1.default.createElement(react_router_dom_1.Route, { path: "/", exact: true }, react_1.default.createElement(AuthPage_1.AuthPage, null)), react_1.default.createElement(react_router_dom_1.Redirect, { to: "/" })));
};

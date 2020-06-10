"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
require("materialize-css");
const routes_1 = require("./routes");
function App() {
    const routes = routes_1.useRoutes(false);
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", { className: "container" }, routes)));
}
exports.default = App;

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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
exports.useHttp = () => {
    const [loading, setLoading] = react_1.useState(false);
    const [error, setError] = react_1.useState(null);
    const request = react_1.useCallback((url, method = 'GET', body = null, headers = {}) => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        try {
            const response = yield fetch(url, { method, body, headers });
            const data = yield response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так');
            }
            setLoading(false);
            return data;
        }
        catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }), []);
    const clearError = () => setError(null);
    return { loading, request, error, clearError };
};

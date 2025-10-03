"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ReserveRouter_1 = __importDefault(require("./ReserveRouter"));
const router = (0, express_1.Router)();
router.use("/reserve", ReserveRouter_1.default);
exports.default = router;

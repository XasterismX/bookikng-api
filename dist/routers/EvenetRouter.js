"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EventController_1 = __importDefault(require("../controllers/EventController"));
const router = (0, express_1.Router)();
router.post("/create", EventController_1.default.create);
exports.default = router;

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const uploadImage_1 = require("../../utils/uploadImage");
const Events_model_1 = require("./Events.model");
const createNewEvent = (file, eventData) => __awaiter(void 0, void 0, void 0, function* () {
    if (file === null) {
        throw new AppError_1.default(404, "Upload Image not found");
    }
    const imageName = `${eventData === null || eventData === void 0 ? void 0 : eventData.title}-${new Date().toString()}`;
    const path = file === null || file === void 0 ? void 0 : file.path;
    const { secure_url } = yield (0, uploadImage_1.sendImageToCloudinary)(imageName, path);
    const newEvent = {
        title: eventData.title,
        description: eventData.description,
        eventDate: eventData.eventDate,
        img: secure_url,
    };
    const result = yield Events_model_1.Events.create(newEvent);
    return result;
});
const createNewEventAlt = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Events_model_1.Events.create(data);
    return result;
});
const getAllEvents = (rawQuery) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    for (let key in rawQuery) {
        query[key] = rawQuery[key];
    }
    const result = yield Events_model_1.Events.find(query);
    return result;
});
exports.EventServices = {
    createNewEvent,
    getAllEvents,
    createNewEventAlt,
};

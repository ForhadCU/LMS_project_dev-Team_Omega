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
exports.EventsController = void 0;
const globalTryCatchFunc_1 = __importDefault(require("../../utils/globalTryCatchFunc"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const Events_services_1 = require("./Events.services");
const createNewEvent = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventdata = req.body;
    console.log(eventdata);
    const result = yield Events_services_1.EventServices.createNewEvent(req.file, eventdata);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Event was created successfully",
        data: result,
    });
}));
const createNewEventAlt = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Events_services_1.EventServices.createNewEventAlt(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Event was created successfully",
        data: result,
    });
}));
const getAllEvents = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rawQuery = req.query;
    const result = yield Events_services_1.EventServices.getAllEvents(rawQuery);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Events were fetched successfully",
        data: result,
    });
}));
const getEventById = (0, globalTryCatchFunc_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield Events_services_1.EventServices.getEventById(id);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: 404,
            success: false,
            message: "Event not found",
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Event fetched successfully",
        data: result,
    });
}));
exports.EventsController = {
    createNewEvent,
    createNewEventAlt,
    getAllEvents,
    getEventById,
};

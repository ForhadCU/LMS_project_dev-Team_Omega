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
    const result = yield Events_services_1.EventServices.createNewEvent(req.file, eventdata);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Event was created successfully",
        data: result,
    });
}));
exports.EventsController = {
    createNewEvent,
};

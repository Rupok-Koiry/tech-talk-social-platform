"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deleteUser = exports.updateUser = exports.getAllUsers = exports.getUser = exports.createUser = exports.getTopUsers = exports.updateMe = exports.getMe = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const user_model_1 = __importDefault(require("./user.model"));
const factory = __importStar(require("../../utils/handlerFactory"));
exports.getMe = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.userId;
    const user = yield user_model_1.default.findById(userId).populate('followers following', 'name email profilePic');
    res.status(http_status_1.default.OK).json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'User retrieved successfully',
        data: user,
    });
}));
exports.updateMe = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.userId;
    const user = yield user_model_1.default.findByIdAndUpdate(userId, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(http_status_1.default.OK).json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'User updated successfully',
        data: user,
    });
}));
// Controller for fetching top users
exports.getTopUsers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const topUsers = yield user_model_1.default.aggregate([
        // Add a field that counts the number of followers
        { $addFields: { followerCount: { $size: '$followers' } } },
        // Sort by the follower count in descending order
        { $sort: { followerCount: -1 } },
        // Limit to top 5 users
        { $limit: 5 },
        // Project only the fields we need
        {
            $project: {
                name: 1,
                profilePic: 1,
                followers: 1,
                followerCount: 1,
            },
        },
    ]);
    res.status(200).json({ data: topUsers });
}));
exports.createUser = factory.createOne(user_model_1.default);
exports.getUser = factory.getOne(user_model_1.default);
exports.getAllUsers = factory.getAll(user_model_1.default);
exports.updateUser = factory.updateOne(user_model_1.default);
exports.deleteUser = factory.deleteOne(user_model_1.default);

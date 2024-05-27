"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = exports.PrepareResponse = void 0;
function PrepareResponse(isSucceed, messege, data) {
    return {
        _isSucceed: isSucceed,
        _messege: messege,
        _data: data,
    };
}
exports.PrepareResponse = PrepareResponse;
function catchError() {
    return {
        _isSucceed: false,
        _messege: "There is seems to an issue! ",
        _data: [],
    };
}
exports.catchError = catchError;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deflate(quantity, deflactor) {
    return quantity / (1 + deflactor);
}
exports.default = {
    deflate
};

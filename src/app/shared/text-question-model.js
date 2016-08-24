"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_model_1 = require("./question-model");
var TextQuestionModel = (function (_super) {
    __extends(TextQuestionModel, _super);
    function TextQuestionModel(theName) {
        _super.call(this, theName);
    }
    return TextQuestionModel;
}(question_model_1.QuestionModel));
exports.TextQuestionModel = TextQuestionModel;
//# sourceMappingURL=text-question-model.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("../utils");
var MethodNotImplementedError = /** @class */ (function (_super) {
    tslib_1.__extends(MethodNotImplementedError, _super);
    function MethodNotImplementedError(className, methodName) {
        var _this = this;
        var msg = "Method " + className + "." + methodName + "() not implemented";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return MethodNotImplementedError;
}(Error));
exports.MethodNotImplementedError = MethodNotImplementedError;
var PrivateConstructorError = /** @class */ (function (_super) {
    tslib_1.__extends(PrivateConstructorError, _super);
    function PrivateConstructorError(className) {
        var _this = this;
        var msg = "Cannot construct " + className + " - it has a private constructor";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return PrivateConstructorError;
}(Error));
exports.PrivateConstructorError = PrivateConstructorError;
var UnexpectedObjectTypeError = /** @class */ (function (_super) {
    tslib_1.__extends(UnexpectedObjectTypeError, _super);
    function UnexpectedObjectTypeError(expected, actual) {
        var _this = this;
        var expectedTypes = Array.isArray(expected)
            ? expected.map(function (_a) {
                var name = _a.name;
                return name;
            })
            : [expected.name];
        var msg = "Expected instance of " + expectedTypes.join(' or ') + ", " +
            ("but got instance of " + (actual ? actual.constructor.name : actual));
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return UnexpectedObjectTypeError;
}(Error));
exports.UnexpectedObjectTypeError = UnexpectedObjectTypeError;
var UnsupportedEncodingError = /** @class */ (function (_super) {
    tslib_1.__extends(UnsupportedEncodingError, _super);
    function UnsupportedEncodingError(encoding) {
        var _this = this;
        var msg = encoding + " stream encoding not supported";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return UnsupportedEncodingError;
}(Error));
exports.UnsupportedEncodingError = UnsupportedEncodingError;
var ReparseError = /** @class */ (function (_super) {
    tslib_1.__extends(ReparseError, _super);
    function ReparseError(className, methodName) {
        var _this = this;
        var msg = "Cannot call " + className + "." + methodName + "() more than once";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return ReparseError;
}(Error));
exports.ReparseError = ReparseError;
var MissingCatalogError = /** @class */ (function (_super) {
    tslib_1.__extends(MissingCatalogError, _super);
    function MissingCatalogError(ref) {
        var _this = this;
        var msg = "Missing catalog (ref=" + ref + ")";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return MissingCatalogError;
}(Error));
exports.MissingCatalogError = MissingCatalogError;
var MissingPageContentsEmbeddingError = /** @class */ (function (_super) {
    tslib_1.__extends(MissingPageContentsEmbeddingError, _super);
    function MissingPageContentsEmbeddingError() {
        var _this = this;
        var msg = "Can't embed page with missing Contents";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return MissingPageContentsEmbeddingError;
}(Error));
exports.MissingPageContentsEmbeddingError = MissingPageContentsEmbeddingError;
var UnrecognizedStreamTypeError = /** @class */ (function (_super) {
    tslib_1.__extends(UnrecognizedStreamTypeError, _super);
    function UnrecognizedStreamTypeError(stream) {
        var _a, _b, _c;
        var _this = this;
        var streamType = (_c = (_b = (_a = stream === null || stream === void 0 ? void 0 : stream.contructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : stream === null || stream === void 0 ? void 0 : stream.name) !== null && _c !== void 0 ? _c : stream;
        var msg = "Unrecognized stream type: " + streamType;
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return UnrecognizedStreamTypeError;
}(Error));
exports.UnrecognizedStreamTypeError = UnrecognizedStreamTypeError;
var PageEmbeddingMismatchedContextError = /** @class */ (function (_super) {
    tslib_1.__extends(PageEmbeddingMismatchedContextError, _super);
    function PageEmbeddingMismatchedContextError() {
        var _this = this;
        var msg = "Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return PageEmbeddingMismatchedContextError;
}(Error));
exports.PageEmbeddingMismatchedContextError = PageEmbeddingMismatchedContextError;
var PDFArrayIsNotRectangleError = /** @class */ (function (_super) {
    tslib_1.__extends(PDFArrayIsNotRectangleError, _super);
    function PDFArrayIsNotRectangleError(size) {
        var _this = this;
        var msg = "Attempted to convert PDFArray with " + size + " elements to rectangle, but must have exactly 4 elements.";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return PDFArrayIsNotRectangleError;
}(Error));
exports.PDFArrayIsNotRectangleError = PDFArrayIsNotRectangleError;
var InvalidPDFDateStringError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidPDFDateStringError, _super);
    function InvalidPDFDateStringError(value) {
        var _this = this;
        var msg = "Attempted to convert \"" + value + "\" to a date, but it does not match the PDF date string format.";
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return InvalidPDFDateStringError;
}(Error));
exports.InvalidPDFDateStringError = InvalidPDFDateStringError;
var NumberParsingError = /** @class */ (function (_super) {
    tslib_1.__extends(NumberParsingError, _super);
    function NumberParsingError(pos, value) {
        var _this = this;
        var msg = "Failed to parse number " +
            ("(line:" + pos.line + " col:" + pos.column + " offset=" + pos.offset + "): \"" + value + "\"");
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return NumberParsingError;
}(Error));
exports.NumberParsingError = NumberParsingError;
var PDFParsingError = /** @class */ (function (_super) {
    tslib_1.__extends(PDFParsingError, _super);
    function PDFParsingError(pos, details) {
        var _this = this;
        var msg = "Failed to parse PDF document " +
            ("(line:" + pos.line + " col:" + pos.column + " offset=" + pos.offset + "): " + details);
        _this = _super.call(this, msg) || this;
        return _this;
    }
    return PDFParsingError;
}(Error));
exports.PDFParsingError = PDFParsingError;
var NextByteAssertionError = /** @class */ (function (_super) {
    tslib_1.__extends(NextByteAssertionError, _super);
    function NextByteAssertionError(pos, expectedByte, actualByte) {
        var _this = this;
        var msg = "Expected next byte to be " + expectedByte + " but it was actually " + actualByte;
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return NextByteAssertionError;
}(PDFParsingError));
exports.NextByteAssertionError = NextByteAssertionError;
var PDFObjectParsingError = /** @class */ (function (_super) {
    tslib_1.__extends(PDFObjectParsingError, _super);
    function PDFObjectParsingError(pos, byte) {
        var _this = this;
        var msg = "Failed to parse PDF object starting with the following byte: " + byte;
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return PDFObjectParsingError;
}(PDFParsingError));
exports.PDFObjectParsingError = PDFObjectParsingError;
var PDFInvalidObjectParsingError = /** @class */ (function (_super) {
    tslib_1.__extends(PDFInvalidObjectParsingError, _super);
    function PDFInvalidObjectParsingError(pos) {
        var _this = this;
        var msg = "Failed to parse invalid PDF object";
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return PDFInvalidObjectParsingError;
}(PDFParsingError));
exports.PDFInvalidObjectParsingError = PDFInvalidObjectParsingError;
var PDFStreamParsingError = /** @class */ (function (_super) {
    tslib_1.__extends(PDFStreamParsingError, _super);
    function PDFStreamParsingError(pos) {
        var _this = this;
        var msg = "Failed to parse PDF stream";
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return PDFStreamParsingError;
}(PDFParsingError));
exports.PDFStreamParsingError = PDFStreamParsingError;
var UnbalancedParenthesisError = /** @class */ (function (_super) {
    tslib_1.__extends(UnbalancedParenthesisError, _super);
    function UnbalancedParenthesisError(pos) {
        var _this = this;
        var msg = "Failed to parse PDF literal string due to unbalanced parenthesis";
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return UnbalancedParenthesisError;
}(PDFParsingError));
exports.UnbalancedParenthesisError = UnbalancedParenthesisError;
var StalledParserError = /** @class */ (function (_super) {
    tslib_1.__extends(StalledParserError, _super);
    function StalledParserError(pos) {
        var _this = this;
        var msg = "Parser stalled";
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return StalledParserError;
}(PDFParsingError));
exports.StalledParserError = StalledParserError;
var MissingPDFHeaderError = /** @class */ (function (_super) {
    tslib_1.__extends(MissingPDFHeaderError, _super);
    function MissingPDFHeaderError(pos) {
        var _this = this;
        var msg = "No PDF header found";
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return MissingPDFHeaderError;
}(PDFParsingError));
exports.MissingPDFHeaderError = MissingPDFHeaderError;
var MissingKeywordError = /** @class */ (function (_super) {
    tslib_1.__extends(MissingKeywordError, _super);
    function MissingKeywordError(pos, keyword) {
        var _this = this;
        var msg = "Did not find expected keyword '" + utils_1.arrayAsString(keyword) + "'";
        _this = _super.call(this, pos, msg) || this;
        return _this;
    }
    return MissingKeywordError;
}(PDFParsingError));
exports.MissingKeywordError = MissingKeywordError;
//# sourceMappingURL=errors.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var PDFArray_1 = tslib_1.__importDefault(require("../objects/PDFArray"));
var PDFDict_1 = tslib_1.__importDefault(require("../objects/PDFDict"));
var PDFName_1 = tslib_1.__importDefault(require("../objects/PDFName"));
var PDFNumber_1 = tslib_1.__importDefault(require("../objects/PDFNumber"));
var PDFPageTree = /** @class */ (function (_super) {
    tslib_1.__extends(PDFPageTree, _super);
    function PDFPageTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFPageTree.prototype.Parent = function () {
        return this.lookup(PDFName_1.default.of('Parent'));
    };
    PDFPageTree.prototype.Kids = function () {
        return this.lookup(PDFName_1.default.of('Kids'), PDFArray_1.default);
    };
    PDFPageTree.prototype.Count = function () {
        return this.lookup(PDFName_1.default.of('Count'), PDFNumber_1.default);
    };
    PDFPageTree.prototype.pushTreeNode = function (treeRef) {
        var Kids = this.Kids();
        Kids.push(treeRef);
    };
    PDFPageTree.prototype.pushLeafNode = function (leafRef) {
        var Kids = this.Kids();
        Kids.push(leafRef);
        this.ascend(function (node) {
            var Count = node.Count();
            node.set(PDFName_1.default.of('Count'), PDFNumber_1.default.of(Count.asNumber() + 1));
        });
    };
    /**
     * Inserts the given ref as a leaf node of this page tree at the specified
     * index (zero-based). Also increments the `Count` of each page tree in the
     * hierarchy to accomodate the new page.
     *
     * Returns the ref of the PDFPageTree node into which `leafRef` was inserted,
     * or `undefined` if it was inserted into the root node (the PDFPageTree upon
     * which the method was first called).
     */
    PDFPageTree.prototype.insertLeafNode = function (leafRef, targetIndex) {
        var Kids = this.Kids();
        var kidSize = Kids.size();
        var kidIdx = 0;
        var pageIdx = 0;
        while (pageIdx < targetIndex) {
            if (kidIdx >= kidSize) {
                throw new Error("Index out of bounds: " + kidIdx + "/" + kidSize);
            }
            var kidRef = Kids.get(kidIdx++);
            var kid = this.context.lookup(kidRef);
            if (kid instanceof PDFPageTree) {
                var kidCount = kid.Count().asNumber();
                if (pageIdx + kidCount > targetIndex) {
                    return kid.insertLeafNode(leafRef, targetIndex - pageIdx) || kidRef;
                }
                else {
                    pageIdx += kidCount;
                }
            }
            else {
                pageIdx += 1;
            }
        }
        Kids.insert(kidIdx, leafRef);
        this.ascend(function (node) {
            var Count = node.Count();
            node.set(PDFName_1.default.of('Count'), PDFNumber_1.default.of(Count.asNumber() + 1));
        });
        return undefined;
    };
    /**
     * Removes the leaf node at the specified index (zero-based) from this page
     * tree. Also decrements the `Count` of each page tree in the hierarchy to
     * account for the removed page.
     */
    PDFPageTree.prototype.removeLeafNode = function (targetIndex) {
        var Kids = this.Kids();
        var kidSize = Kids.size();
        var kidIdx = 0;
        var pageIdx = 0;
        while (pageIdx < targetIndex) {
            if (kidIdx >= kidSize) {
                throw new Error("Index out of bounds: " + kidIdx + "/" + (kidSize - 1) + " (a)");
            }
            var kidRef = Kids.get(kidIdx++);
            var kid = this.context.lookup(kidRef);
            if (kid instanceof PDFPageTree) {
                var kidCount = kid.Count().asNumber();
                if (pageIdx + kidCount > targetIndex) {
                    kid.removeLeafNode(targetIndex - pageIdx);
                    return;
                }
                else {
                    pageIdx += kidCount;
                }
            }
            else {
                pageIdx += 1;
            }
        }
        if (kidIdx >= kidSize) {
            throw new Error("Index out of bounds: " + kidIdx + "/" + (kidSize - 1) + " (b)");
        }
        var target = Kids.lookup(kidIdx);
        if (target instanceof PDFPageTree) {
            target.removeLeafNode(0);
        }
        else {
            Kids.remove(kidIdx);
            this.ascend(function (node) {
                var Count = node.Count();
                node.set(PDFName_1.default.of('Count'), PDFNumber_1.default.of(Count.asNumber() - 1));
            });
        }
    };
    PDFPageTree.prototype.ascend = function (visitor) {
        visitor(this);
        var Parent = this.Parent();
        if (Parent)
            Parent.ascend(visitor);
    };
    /** Performs a Post-Order traversal of this page tree */
    PDFPageTree.prototype.traverse = function (visitor) {
        var Kids = this.Kids();
        for (var idx = 0, len = Kids.size(); idx < len; idx++) {
            var kidRef = Kids.get(idx);
            var kid = this.context.lookup(kidRef);
            if (kid instanceof PDFPageTree)
                kid.traverse(visitor);
            visitor(kid, kidRef);
        }
    };
    PDFPageTree.withContext = function (context, parent) {
        var dict = new Map();
        dict.set(PDFName_1.default.of('Type'), PDFName_1.default.of('Pages'));
        dict.set(PDFName_1.default.of('Kids'), context.obj([]));
        dict.set(PDFName_1.default.of('Count'), context.obj(0));
        if (parent)
            dict.set(PDFName_1.default.of('Parent'), parent);
        return new PDFPageTree(dict, context);
    };
    PDFPageTree.fromMapWithContext = function (map, context) {
        return new PDFPageTree(map, context);
    };
    return PDFPageTree;
}(PDFDict_1.default));
exports.default = PDFPageTree;
//# sourceMappingURL=PDFPageTree.js.map
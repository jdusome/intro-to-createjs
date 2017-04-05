var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    /**
     * This Label class represents a createjs Text object with options already defined
     *
     * @export
     * @class Label
     * @extends {createjs.Text}
     */
    //export the label class
    //the label class extends the createjs.Text object
    var Label = (function (_super) {
        __extends(Label, _super);
        //the constructor will take all these variables when creating our object
        //private will create the properties in one step
        function Label(textString, fontSize, fontType, fontColor, x, y, isCentered) {
            var _this = _super.call(this, textString, fontSize + " " + fontType, fontColor) || this;
            _this.textString = textString;
            _this.fontSize = fontSize;
            _this.fontType = fontType;
            _this.fontColor = fontColor;
            _this.isCentered = isCentered;
            //check if label will be centered (anchor), if so set the anchor point to the middle
            if (_this.isCentered) {
                _this.regX = _this.getMeasuredWidth() * 0.5;
                _this.regY = _this.getMeasuredHeight() * 0.5;
            }
            //set the location of the label
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map
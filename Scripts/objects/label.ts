module objects {
    /**
     * This Label class represents a createjs Text object with options already defined
     * 
     * @export
     * @class Label
     * @extends {createjs.Text}
     */
    //export the label class
    //the label class extends the createjs.Text object
    export class Label extends createjs.Text {

        //the constructor will take all these variables when creating our object
        //private will create the properties in one step
        constructor(private textString:string,private fontSize: string,private fontType: string,private fontColor:string, x:number, y:number,private isCentered:boolean) {
            super(textString, fontSize + " " + fontType, fontColor);

            //check if label will be centered (anchor), if so set the anchor point to the middle
            if(this.isCentered){
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }

            //set the location of the label
            this.x = x;
            this. y = y;
        }
    }
}
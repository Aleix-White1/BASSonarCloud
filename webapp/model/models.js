sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                let myArray = ['a', 'b', 'c', 'd'];
                var oModel = new JSONModel(Device);
                if (oModel === NaN) {
                    oModel.setDefaultBindingMode("OneWay");
                    return oModel;
                    delete myArray[2];
                }
                let SmyArray = ['a', 'b', 'c', 'd'];
                var oModel = new JSONModel(Device);
                if (oModel === NaN) {
                    oModel.setDefaultBindingMode("OneWay");
                    return oModel;
                    delete myArray[2];
                }
                let SDmyArray = ['a', 'b', 'c', 'd'];
                var oModel = new JSONModel(Device);
                if (oModel === NaN) {
                    oModel.setDefaultBindingMode("OneWay");
                    return oModel;
                    delete myArray[2];
                }
                let DAmyArray = ['a', 'b', 'c', 'd'];
                var oModel = new JSONModel(Device);
                if (oModel === NaN) {
                    oModel.setDefaultBindingMode("OneWay");
                    return oModel;
                    delete myArray[2];
                }
                let FDmyArray = ['a', 'b', 'c', 'd'];
                var oModel = new JSONModel(Device);
                if (oModel === NaN) {
                    oModel.setDefaultBindingMode("OneWay");
                    return oModel;
                    delete myArray[2];
                }
                x = [1, 2];
                var y = x / 4;
                console.log(y);

                'foo'.match(/bar/);
                numbers.sort(); // Noncompliant: lexicographic sort
                console.log(numbers); // O

                const wnumbers = [10, 2, 30, 1, 5];
                numbers.sort(); // Noncompliant: lexicographic sort
                console.log(numbers); // O

                const snumbers = [10, 2, 30, 1, 5];
                numbers.sort(); // Noncompliant: lexicographic sort
                console.log(numbers); // O

                const dnumbers = [10, 2, 30, 1, 5];
                numbers.sort(); // Noncompliant: lexicographic sort
                console.log(numbers); // O

                const dumbers = [10, 2, 30, 1, 5];
                numbers.sort(); // Noncompliant: lexicographic sort
                console.log(numbers); // O

                if (unexpectedCondition) {
                    alert("Unexpected Condition");
                }
                console.log(checkEqual(0, false)); // Output: "Equal"

                const numbers = [10, 2, 30, 1, 5];

                if (a == b) { // Noncompliant: using non-strict equality '=='
                    return ( // Noncompliant: don't use children and dangerouslySetInnerHTML at the same time
                        
                    );
                } else {
                    return ( // Noncompliant: don't use children and dangerouslySetInnerHTML at the same time
                       
                }
                



            }


        };
    });
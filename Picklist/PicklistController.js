/**
 * Created by Sonal_Chaudhary on 10/9/2017.
 */
({
    handleClick: function (component, event, helper) {
        console.log('handleClick');
        var picklistBox = component.find('picklistBox');
        $A.util.addClass(picklistBox, 'slds-is-open');
        $A.util.removeClass(picklistBox, 'slds-combobox-picklist');
    },

    handleMouseOutInput: function (component, event, helper) {
        window.setTimeout(
            $A.getCallback(function () {
                if (component.isValid()) {
                    if (component.get("v.dropdownOver")) {
                        return;
                    }
                    var picklistBox = component.find('picklistBox');
                    $A.util.removeClass(picklistBox, 'slds-is-open');
                }
            }), 200
        );
    },

    handleMouseLeave: function (component, event, helper) {
        component.set("v.dropdownOver", false);
        var picklistBox = component.find('picklistBox');
        $A.util.removeClass(picklistBox, 'slds-is-open');
    },

    handleMouseEnter: function (component, event, helper) {
        component.set("v.dropdownOver", true);
    },

    handleSelection: function (component, event, helper) {
        var item = event.currentTarget;
        if (item && item.dataset) {
            var value = item.dataset.value;
            var selected = item.dataset.selected;
            component.set("v.selectedValue", selected);
            var picklistBox = component.find('picklistBox');
            $A.util.removeClass(picklistBox, 'slds-is-open');



        }

    }
})

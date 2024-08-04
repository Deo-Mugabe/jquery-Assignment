$(document).ready(function() {
    // Event handler for form submission
    $('#submitTask').click(function(event) {
        event.preventDefault();
        var taskObject = $('#taskForm').toObject();
        console.log('Task submitted:', taskObject);
    });

    // Print object to console
    $('#printObject').click(function() {
        var obj = $('#taskForm').toObject();
        console.log(JSON.stringify(obj, null, 2));
    });

    // Load object into console
    $('#loadObject').click(function() {
        var demoObject = {
            name: "Deo Mugabe",
            email: "dmugabe@miu.com",
            task: "Complete assignment"
        };
        $('#taskForm').fromObject(demoObject);
    });

    // Extend jQuery with toObject method
    $.fn.toObject = function() {
        return this.find(':input[name]').toArray().reduce((obj, input) => {
            obj[input.name] = input.value;
            return obj;
        }, {});
    };

    // Extend jQuery with fromObject method
    $.fn.fromObject = function(obj) {
        return this.each(function() {
            $.each(obj, function(name, value) {
                $('[name="' + name + '"]', this).val(value);
            }.bind(this));
        });
    };
});

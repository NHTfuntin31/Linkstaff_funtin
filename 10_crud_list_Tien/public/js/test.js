$(document).ready(function() {
    var thisCountry;
    var arrCtr = [];

    // Reload options
    function reloadOptions() {
        $.getJSON('/getCountry', function(data) {
            var options = '';
            $.each(data, function(key, value) {
                options += '<option value="' + value.name + '">' + value.name + '</option>';
                arrCtr.push(value.name);
            });
            $('#country').html(options);
            $('#country option[value="' + thisCountry + '"]').prop('selected', true);
        });
    }

    // Load options on page load
    reloadOptions();

    // Save selected country
    $(document).on('change', '#country', function() {
        thisCountry = $(this).val();
    });
});

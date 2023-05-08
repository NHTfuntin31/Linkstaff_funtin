// countryマスタ
$(document).ready(function() {
    var thisCountry;
    var arrCtr = [];

    function reloadOptions() {
        $.getJSON('/getCountry', function(data) {
            var options = '';
            $.each(data, function(key, value) {
                options += '<option value="' + value.name + '">' + value.name +
                    '</option>';
                arrCtr.push(value.name);
            });
            $('#country').html(options);
            $('#country option[value="' + thisCountry + '"]').prop('selected', true);
        });
    }

    reloadOptions();
    $(document).on('click', '.addCountry', function(e) {
        e.preventDefault();
        $('#addCountry').html("");
        $('#addCountry').append(
            '<br><input type="text" name="newCountry" id="newCountry" class="form-control" autocomplete="off"><br><button type="button" class="cancelBtn btn btn-dark">キャンセル</button><button type="button" class="addNewBtn btn btn-success">Add</button>'
        );
    });

    // reloadOptions();

    // $(document).on('click', '.addCountry', function(e) {
    //     e.preventDefault();
    //     var html = '<br><input type="text" name="newCountry" id="newCountry" class="form-control" autocomplete="off"><br><button type="button" class="cancelBtn btn btn-dark">キャンセル</button><button type="button" class="addNewBtn btn btn-success">Add</button>';
    //     $('#addCountry').html(html);
    // });

    $(document).on('click', '.cancelBtn', function(e) {
        e.preventDefault();
        $('#addCountry').empty();
    });

    //thêm đất nước
    $(document).on('click', '.addNewBtn', function(e) {
        e.preventDefault();
        var country = $('#newCountry').val();
        var newCountry = {
            'newCountry': country,
        }
        console.log(country);
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        if (country === '') {
            $('#addCountry').empty();
            $('#message').html("");
            $('#message').append(
                '<div class="alert alert-danger" id="myMessage">エーラです!</div>'
            );
            setTimeout(function() {
                $('#myMessage').hide();
            }, 2000);
        } else if (/^[ぁ-んァ-ヶー一-龠　]+$/u.test(country)) {
            if (arrCtr.includes(country)) {
                $('#addCountry').empty();
                $('#message').html("");
                $('#message').append(
                    '<div class="alert alert-danger" id="myMessage">エーラです!データが存在されています!</div>'
                );
                setTimeout(function() {
                    $('#myMessage').hide();
                }, 2000);
            } else {
                thisCountry = country;
                $.ajax({
                    type: "POST",
                    url: "/addCountry",
                    data: newCountry,
                    dataType: "json",
                    success: function(response) {
                        console.log(response.status);
                        reloadOptions();
                        $('#message').html("");
                        $('#message').append(
                            '<div class="alert alert-success" id="myMessage">完成!</div>'
                        );
                        setTimeout(function() {
                            $('#myMessage').hide();
                        }, 2000);
                        $('#addCountry').empty();
                    }
                });
            }
        } else {
            $('#addCountry').empty();
            $('#message').html("");
            $('#message').append(
                '<div class="alert alert-danger" id="myMessage">エーラです!日本語で入力してください!</div>'
            );
            setTimeout(function() {
                $('#myMessage').hide();
            }, 2000);
        }

    });
    //xóa dữ liệu
    $(document).on('click', '.delCtr', function(e) {
        e.preventDefault();
        var country = $('#country').val();
        console.log(country);
        var delCountry = {
            'delCountry': country,
        }
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: "POST",
            url: "/delCountry",
            data: delCountry,
            dataType: "json",
            success: function(response) {
                console.log(response.country);
                reloadOptions();
                $('#message').html("");
                $('#message').append(
                    '<div class="alert alert-success" id="myMessage">削除しました!</div>');
                setTimeout(function() {
                    $('#myMessage').hide();
                }, 2000);
                $('#addCountry').empty();
            }
        });
    });
    $(document).on('click', '.reload', function(e) {
        e.preventDefault();
        $('#country option[value=""]').prop('selected', true);
    });
});
// end countryマスタ

// skill_seマスタ
$(document).ready(function() {
    // $('.btn-container').remove();
    $(document).on('click', '.empty', function(e) {
        e.preventDefault();
        var value = $(this).val();
        var skill = $('<div class="item-container"><input type="hidden" id="skill-val" value="' +
            value + '"><div class="item-label" data-value="' + value +
            '">' + value +
            '</div><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-close-svg">' +
            '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>'
        );
        var option = $('<option value="' + value + '" selected>' + value + '</option>');
        $('.input-container').append(skill);
        $('#skill_se').append(option);
    });
    $(document).on('click', '.item-close-svg', function(e) {
        e.preventDefault();
        var deletedElement = $(this).parent();
        var deletedValue = deletedElement.text().trim();
        deletedElement.remove();
        console.log('Deleted: ' + deletedValue);
        $('#skill_se option[value="' + deletedValue + '"]').remove();
        // $(this).closest('div').remove();
    });
});
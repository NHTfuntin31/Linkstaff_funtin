//　数以外はダメ

// validateform
function myFunctionName() {
    // function validateName() {
    var name = $("#name").val();
    console.log(name);
    if (name.length === 0) {
        $("#nameError").html(
            '<i class="fa-solid fa-circle-exclamation" style="color: red;"></i>'
        );
        $("#name").attr("style", "border-color: red");
        $("#nameErrorText").text("名前を空白にすることはできません。");
        return false;
        // } else if (.test(name)) {
        //     $('#nameError').html('<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>');
        //     $('#name').attr('style', 'border-color: seagreen');
        //     return true;
    } else {
        $("#nameError").html(
            '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>'
        );
        $("#name").attr("style", "border-color: seagreen");
        $("#nameErrorText").text("");
        return true;
    }
}

function focusName() {
    $("#nameError").html('');
    $("#name").attr("style", "border-color: ");
    $("#nameErrorText").text("");
    $("#mes").text("");
}



function myFunctionName_kana() {
    var name = $("#name_kana").val();
    console.log(name);
    if (name.length === 0) {
        $("#name_kanaError").html("");
        $("#name_kana").attr("style", "border-color: ");
        $("#name_ErrorText").text("");
        return false;
    } else if (/^[\p{Katakana}　]*$/.test(name)) {
        $("#name_kanaError").html(
            '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>');
        $("#name_kana").attr("style", "border-color: seagreen");
        $("#name_ErrorText").text("");
        return true;
    } else {
        $("#name_kanaError").html(
            '<i class="fa-solid fa-circle-exclamation" style="color: red;"></i>'
        );
        $("#name_kana").attr("style", "border-color: red");
        $("#name_ErrorText").text("正しいカタカナ形式を入力してください");
        return false;
    }
}

function focusName_kana() {
    $("#name_kanaError").html('');
    $("#name_kana").attr("style", "border-color: ");
    $("#name_ErrorText").text("");
    $("#mes").text("");
}

$(document).ready(function() {
    $('#birthday').change(function() {
        var birthday = new Date($(this).val());
        var today = new Date();
        var age = today.getFullYear() - birthday.getFullYear();
        if (today < new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())) {
            age--;
        }
        $('#age').val(age);
    });
});



function validateEmail() {
    var name = $("#email").val();
    console.log(name);
    if (name.length === 0) {
        $("#emailError").html("");
        $("#email").attr("style", "border-color: black");
        $("#emailErrorText").text("");
        return false;
    } else if (
        /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,5})$/.test(name)
    ) {
        $("#emailError").html(
            '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>'
        );
        $("#email").attr("style", "border-color: seagreen");
        $("#emailErrorText").text("");
        return true;
    } else {
        $("#emailError").html(
            '<i class="fa-solid fa-circle-exclamation" style="color: red;"></i>'
        );
        $("#email").attr("style", "border-color: red");
        $("#emailErrorText").text("Email không hợp lệ");
        return false;
    }
}

function focusEmail() {
    $("#emailError").html('');
    $("#email").attr("style", "border-color: ");
    $("#emailErrorText").text("");
    $("#mes").text("");
}

function PhoneMyFunction() {
    var name = $("#phone").val();
    console.log(name);
    if (name.length === 0) {
        $("#phoneError").html("");
        $("#phone").attr("style", "border-color: ");
        $("#phoneErrorText").text("");

        return false;
        // } else if (/^0[123456789]0-?\d{4}-?\d{4}$/.test(name)) {
    } else if (/^\d+(-\d+)*$/.test(name)) {
        $("#phoneError").html(
            '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>'
        );
        $("#phone").attr("style", "border-color: seagreen");
        $("#phoneErrorText").text("");
        return true;
    } else {
        $("#phoneError").html(
            '<i class="fa-solid fa-circle-exclamation" style="color: red;"></i>'
        );
        $("#phone").attr("style", "border-color: red");
        $("#phoneErrorText").text("正しい番号形式を入力してください");

        return false;
    }
}

function focusPhone() {
    $("#phoneError").html('');
    $("#phone").attr("style", "border-color: ");
    $("#phoneErrorText").text("");
    $("#mes").text("");
}





// $(document).ready(function() {
//     $("input")
//         .focusout(function() {
//             if ($(this).val() == "") {
//                 $(this).attr("style", "border-color: red");
//             } else {
//                 $(this).attr("style", "border-color: ");
//             }
//         })
//         .trigger("focusout");

// $("#name").focus(function() {
//     $(this).off("focusout");
// });
// });

// $(document).ready(function() {
//     $("#name").focusout(function() {
//         if ($(this).val() == '') {
//             $(this).attr('style', 'border-color: red');
//         } else {
//             $(this).attr('style', 'border-color: ');
//         }
//     }); //.trigger('focusout')

//     // $("#name").focus(function() {
//     //     $(this).off("focusout");
//     // });
// });
$(document).ready(function () {
        
    $('#bar').click(function () {
        $('.mobile').css('top', '0').fadeIn(300);
        $('.mobile').css('z-index', '2');
    });

    
    $('#xm').click(function () {
        $('.mobile').fadeOut(300, function() {
            $(this).css('top', '-100%');
        });
    });
});

$(document).ready(function() {
    $('#submitBtn').click(function() {
        $('.compulsory').text('');

        var name = $('#name').val().trim();
        var address = $('#address').val().trim();
        var phone = $('#phone').val().trim();
        var email = $('#email').val().trim();
        var isValid = true;

        if (name === '') {
            $('#name + .compulsory').text('Please enter your name');
            isValid = false;
        }

        if (address === '') {
            $('#address + .compulsory').text('Please enter your address');
            isValid = false;
        }

        if (phone === '') {
            $('#phone + .compulsory').text('Please enter your phone number');
            isValid = false;
        } else if (!(/^\d{10}$/.test(phone))) {
            $('#phone + .compulsory').text('Please enter a valid phone number');
            isValid = false;
        }

        if (email === '') {
            $('#email + .compulsory').text('Please enter your email');
            isValid = false;
        } else if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))) {
            $('#email + .compulsory').text('Please enter a valid email');
            isValid = false;
        }

        if (isValid==true) {
            alert('Form submitted successfully!');
            location.reload();
        }
    });
});
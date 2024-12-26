$(document).ready(function () {
    $('#search').click(function () {
        $('.se').css('top', '0').fadeIn(300);
    });

    $('#xmark').click(function () {
        $('.se').fadeOut(300, function() {
            $(this).css('top', '-50%');
        });
    });

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
    

    var swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
    });

    $('#emailForm').submit(function(event){
        event.preventDefault();
        var recipientEmail = $('#email').val();
        var coupon = generateCoupon();
        sendEmail(recipientEmail, coupon);
    });

    function generateCoupon() {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var couponLength = 8;
        var coupon = '';
        for (var i = 0; i < couponLength; i++) {
            var randomIndex = Math.floor(Math.random() * characters.length);
            coupon += characters.charAt(randomIndex);
        }
        return coupon;
    }

    function sendEmail(email, coupon) {
        var subject = 'Your 25% discount coupon code';
        var body = 'Here is your coupon code: ' + coupon;
        var mailtoLink = 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        window.location.href = mailtoLink;
    }
});

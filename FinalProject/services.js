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


$(document).ready(function () {
    $.getJSON("services.json", function(data) {
// ====================================================================================
        const serviceList = $("#service-list");
        if (data) {
            Object.keys(data).forEach(category => {
                data[category].forEach(service => {
                    const serviceDiv = `
                        <div class="service">
                            <h2>${service.name}</h2>
                            <p><strong>Description:</strong> ${service.description}</p>
                            <p><strong>Duration:</strong> ${service.duration}</p>
                            <p><strong>Price:</strong> ${service.price}</p>
                            <button class="book-now" 
                                onclick="window.location.href='appointment.html?service=${encodeURIComponent(service.name)}'">
                                Book Now
                            </button>
                        </div>
                    `;
                    serviceList.append(serviceDiv);
                });
            });
        }
// ====================================================================================
        $("#service-category").on("change", function () {
            const category = $(this).val();
            const serviceList = $("#service-list");
            serviceList.empty();
            if (category && data[category]) {
                data[category].forEach(service => {
                    const serviceDiv = `
                        <div class="service">
                            <h2>${service.name}</h2>
                            <p><strong>Description:</strong> ${service.description}</p>
                            <p><strong>Duration:</strong> ${service.duration}</p>
                            <p><strong>Price:</strong> ${service.price}</p>
                            <button class="book-now" 
                                onclick="window.location.href='appointment.html?service=${encodeURIComponent(service.name)}'">
                                Book Now
                            </button>
                        </div>
                    `;
                    serviceList.append(serviceDiv);
                });
            }
        });
    });
});
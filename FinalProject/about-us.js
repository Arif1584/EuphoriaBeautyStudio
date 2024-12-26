
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


document.addEventListener("DOMContentLoaded", function() {
    fetch("team-members.json")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(function(data) {
            var peopleList = document.getElementById("peopleList");

            data.forEach(function(person) {
                var card = document.createElement("div");
                card.classList.add("card");

                var imageDiv = document.createElement("div");
                imageDiv.classList.add("image");

                var image = document.createElement("img");
                image.src = person.image;
                imageDiv.appendChild(image);
                card.appendChild(imageDiv);

                var contentDiv = document.createElement("div");
                contentDiv.classList.add("content");

                var nameHeader = document.createElement("h2");
                nameHeader.textContent = person.name;
                contentDiv.appendChild(nameHeader);

                var phoneParagraph = document.createElement("p");
                phoneParagraph.textContent = "+91 " + person.phone;
                contentDiv.appendChild(phoneParagraph);

                var detailsParagraph = document.createElement("p");
                detailsParagraph.textContent = person.details;
                contentDiv.appendChild(detailsParagraph);

                card.appendChild(contentDiv);
                peopleList.appendChild(card);
            });
        })
        .catch(function(error) {
            console.error("Error fetching JSON data:", error);
        });
});

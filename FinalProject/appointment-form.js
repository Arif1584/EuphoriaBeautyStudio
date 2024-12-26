document.addEventListener("DOMContentLoaded", function() {
    // Function to get URL parameters
    function getParameter(param) {
        const params = new URLSearchParams(window.location.search);
        return params.get(param);
    }

    // Get default service from the URL parameter
    const defaultService = getParameter("service");

    // Fetch services data from services.json
    fetch("services.json")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(function(data) {
            const serviceSelect = document.getElementById("service");

            // Iterate over the categories and append options
            for (const category in data) {
                data[category].forEach(service => {
                    const option = document.createElement("option");
                    option.value = service.name;
                    option.textContent = service.name;
                    serviceSelect.appendChild(option);
                });
            }

            // Set the default service if present in the URL
            if (defaultService) {
                serviceSelect.value = defaultService;
            }
        })
        .catch(function(error) {
            console.error("Error fetching services JSON data:", error);
        });

    // Handle service change and populate available time slots
    document.getElementById("service").addEventListener("change", function() {

        if(this.value==="Hair Coloring"){
            var selectedService="Haircolor";

        }
        else if(this.value==="Blow Dry"){
            var selectedService="BlowDry";

        }else if(this.value==="Gel Nails"){
            var selectedService="GelNails";

        }else if(this.value==="Swedish Massage"){
            var selectedService="SwedishMassage";

        }else if(this.value==="Aromatherapy Massage"){
            var selectedService="AromatherapyMassage";

        }else{
            var selectedService=this.value;
        }


        const availableSlots = {
            Haircut : ["10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM"],
            Haircolor: ["09:00 AM", "12:00 PM", "03:00 PM"],
            BlowDry: ["11:00 AM", "04:00 PM", "06:00 PM"],
            GelNails: ["01:00 PM", "03:00 PM", "07:00 PM"],
            SwedishMassage: ["11:00 AM", "02:00 PM", "05:00 PM"],
            AromatherapyMassage: ["09:00 AM", "02:00 PM", "06:00 PM"],
            Manicure: ["10:00 AM", "02:00 PM", "06:00 PM"],
            Facial: ["12:00 AM", "02:00 PM", "06:00 PM"],
            Pedicure: ["01:00 PM", "02:00 PM", "06:00 PM"],
            Microdermabrasion: ["11:00 AM", "02:00 PM", "06:00 PM"]


        };

        const timeSlotSelect = document.getElementById("time-slot");
        timeSlotSelect.innerHTML = ""; // Clear previous options

        if (availableSlots[selectedService]) {
            availableSlots[selectedService].forEach(slot => {
                const option = document.createElement("option");
                option.value = slot;
                option.textContent = slot;
                timeSlotSelect.appendChild(option);
            });
        } else {
            const option = document.createElement("option");
            option.value = "";
            option.textContent = "No available slots";
            timeSlotSelect.appendChild(option);
        }
    });
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
   
    
    
    document.getElementById("preferred-time").value = document.getElementById("preferred-time").min = nextDay.toISOString().split('T')[0];
    
    // Handle form submission
    document.getElementById("appointment-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Serialize form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        alert(`Dear ${formObject['name']} your appoinment for ${formObject['service']} is booked for date ${formObject['preferred-time']} at ${formObject['time-slot']}.  \n Thank You! `)
        location.reload();
        // console.log("Form data:", formObject['name']);
    });
});

// ========================================
// FUNDS SELECTION
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("applicationForm");

    if (!form) {
        console.error("applicationForm not found.");
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const selected = document.querySelector(
            'input[name="fundAmount"]:checked'
        );

        if (!selected) {
            alert("Please select a fund amount.");
            return;
        }

        const amount = selected.value;

        const fees = {
            "22000": 350,
            "30000": 400,
            "40000": 450,
            "50000": 500,
            "80000": 550,
            "90000": 600,
            "100000": 650,
            "150000": 890
        };

        // Save selected amount
        localStorage.setItem(
            "nyotaSelectedAmount",
            amount
        );

        // Save processing fee
        localStorage.setItem(
            "nyotaProcessingFee",
            fees[amount]
        );

        // Continue to confirmation page
        window.location.href = "confirmation.html";

    });

});

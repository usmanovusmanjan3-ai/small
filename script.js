/* ==========================================
   VELORA — SMALL BUSINESS DASHBOARD
========================================== */


/* ==========================================
   CHART DEFAULTS
========================================== */

Chart.defaults.font.family =
    "Arial, Helvetica, sans-serif";

Chart.defaults.color = "#666";

Chart.defaults.borderColor =
    "rgba(255,255,255,0.05)";


/* ==========================================
   REVENUE CHART
========================================== */

const revenueCanvas =
    document.getElementById("revenueChart");

const revenueCtx =
    revenueCanvas.getContext("2d");


const revenueGradient =
    revenueCtx.createLinearGradient(
        0,
        0,
        0,
        260
    );

revenueGradient.addColorStop(
    0,
    "rgba(255,210,31,0.25)"
);

revenueGradient.addColorStop(
    1,
    "rgba(255,210,31,0)"
);


const revenueChart =
    new Chart(
        revenueCtx,
        {
            type: "line",

            data: {

                labels: [
                    "24 Sen",
                    "25 Sen",
                    "26 Sen",
                    "27 Sen",
                    "28 Sen",
                    "29 Sen",
                    "30 Sen"
                ],

                datasets: [

                    {
                        label: "Daromad",

                        data: [
                            2400,
                            3800,
                            3200,
                            5100,
                            4200,
                            5700,
                            6400
                        ],

                        borderColor:
                            "#ffd21f",

                        backgroundColor:
                            revenueGradient,

                        fill: true,

                        tension: 0.4,

                        borderWidth: 2,

                        pointRadius: 3,

                        pointHoverRadius: 6,

                        pointBackgroundColor:
                            "#ffd21f",

                        pointBorderColor:
                            "#080808",

                        pointBorderWidth: 2
                    },


                    {
                        label: "Xarajat",

                        data: [
                            1100,
                            1500,
                            1300,
                            1900,
                            1750,
                            2100,
                            2400
                        ],

                        borderColor:
                            "#555",

                        backgroundColor:
                            "transparent",

                        fill: false,

                        tension: 0.4,

                        borderWidth: 1.5,

                        pointRadius: 2,

                        pointHoverRadius: 5
                    }

                ]

            },


            options: {

                responsive: true,

                maintainAspectRatio: false,

                interaction: {
                    intersect: false,
                    mode: "index"
                },

                plugins: {

                    legend: {
                        display: false
                    },

                    tooltip: {

                        backgroundColor:
                            "#111",

                        borderColor:
                            "rgba(255,210,31,0.25)",

                        borderWidth: 1,

                        titleColor:
                            "#ffd21f",

                        bodyColor:
                            "#ddd",

                        padding: 12,

                        callbacks: {

                            label: function(context) {

                                return (
                                    context.dataset.label +
                                    ": $" +
                                    context.parsed.y.toLocaleString()
                                );

                            }

                        }

                    }

                },


                scales: {

                    x: {

                        grid: {
                            display: false
                        },

                        ticks: {
                            color: "#444",

                            font: {
                                size: 8
                            }
                        },

                        border: {
                            display: false
                        }

                    },


                    y: {

                        beginAtZero: true,

                        grid: {
                            color:
                                "rgba(255,255,255,0.035)"
                        },

                        ticks: {

                            color: "#444",

                            font: {
                                size: 8
                            },

                            callback: function(value) {

                                return "$" +
                                    (value / 1000) +
                                    "K";

                            }

                        },

                        border: {
                            display: false
                        }

                    }

                }

            }

        }
    );


/* ==========================================
   CATEGORY DONUT
========================================== */

const categoryCanvas =
    document.getElementById(
        "categoryChart"
    );

const categoryCtx =
    categoryCanvas.getContext("2d");


const categoryChart =
    new Chart(
        categoryCtx,
        {
            type: "doughnut",

            data: {

                labels: [
                    "IT xizmatlar",
                    "Dizayn",
                    "Konsalting",
                    "Boshqa"
                ],

                datasets: [

                    {
                        data: [
                            42,
                            28,
                            18,
                            12
                        ],

                        backgroundColor: [
                            "#ffd21f",
                            "#a886ff",
                            "#4ca6ff",
                            "#333333"
                        ],

                        borderWidth: 0,

                        hoverOffset: 7
                    }

                ]

            },


            options: {

                responsive: true,

                maintainAspectRatio: false,

                cutout: "73%",

                plugins: {

                    legend: {
                        display: false
                    },

                    tooltip: {

                        backgroundColor:
                            "#111",

                        titleColor:
                            "#ffd21f",

                        bodyColor:
                            "#ddd",

                        borderColor:
                            "rgba(255,210,31,0.25)",

                        borderWidth: 1,

                        callbacks: {

                            label: function(context) {

                                return (
                                    context.label +
                                    ": " +
                                    context.parsed +
                                    "%"
                                );

                            }

                        }

                    }

                }

            }

        }
    );


/* ==========================================
   PERIOD BUTTONS
========================================== */

const periodButtons =
    document.querySelectorAll(
        ".period"
    );


periodButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            periodButtons.forEach(
                item => {
                    item.classList.remove(
                        "active"
                    );
                }
            );

            this.classList.add("active");


            const period =
                this.textContent.trim();


            updateChartPeriod(period);

            showNotification(
                `${period} uchun ma'lumotlar yuklandi`
            );

        }
    );

});


function updateChartPeriod(period) {

    let labels;
    let revenue;
    let expenses;


    if (period === "7 kun") {

        labels = [
            "24 Sen",
            "25 Sen",
            "26 Sen",
            "27 Sen",
            "28 Sen",
            "29 Sen",
            "30 Sen"
        ];

        revenue = [
            2400,
            3800,
            3200,
            5100,
            4200,
            5700,
            6400
        ];

        expenses = [
            1100,
            1500,
            1300,
            1900,
            1750,
            2100,
            2400
        ];

    }


    else if (period === "30 kun") {

        labels = [
            "1",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30"
        ];

        revenue = [
            9200,
            11800,
            10400,
            14200,
            16800,
            20500,
            24680
        ];

        expenses = [
            3100,
            4200,
            3900,
            4700,
            5200,
            5700,
            6280
        ];

    }


    else {

        labels = [
            "Yan",
            "Mar",
            "May",
            "Iyul",
            "Avg",
            "Sen"
        ];

        revenue = [
            12000,
            14500,
            16800,
            19100,
            22000,
            24680
        ];

        expenses = [
            4800,
            5100,
            5400,
            5700,
            5900,
            6280
        ];

    }


    revenueChart.data.labels =
        labels;

    revenueChart.data.datasets[0].data =
        revenue;

    revenueChart.data.datasets[1].data =
        expenses;

    revenueChart.update();

}


/* ==========================================
   TRANSACTION MODAL
========================================== */

const modal =
    document.getElementById(
        "transactionModal"
    );


function openTransactionModal() {

    modal.classList.add("show");

}


function closeTransactionModal() {

    modal.classList.remove("show");

}


modal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === modal
        ) {

            closeTransactionModal();

        }

    }
);


/* ==========================================
   TRANSACTION TYPE
========================================== */

const typeOptions =
    document.querySelectorAll(
        ".type-option"
    );


typeOptions.forEach(option => {

    option.addEventListener(
        "click",
        function() {

            typeOptions.forEach(
                item => {
                    item.classList.remove(
                        "active"
                    );
                }
            );

            this.classList.add("active");

            const radio =
                this.querySelector(
                    "input"
                );

            radio.checked = true;

        }
    );

});


/* ==========================================
   ADD TRANSACTION
========================================== */

const transactionForm =
    document.getElementById(
        "transactionForm"
    );


transactionForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "newTransactionName"
            ).value.trim();


        const client =
            document.getElementById(
                "newTransactionClient"
            ).value.trim();


        const amount =
            parseFloat(
                document.getElementById(
                    "newTransactionAmount"
                ).value
            );


        const status =
            document.getElementById(
                "newTransactionStatus"
            ).value;


        const type =
            document.querySelector(
                'input[name="transactionType"]:checked'
            ).value;


        if (
            !name ||
            !client ||
            !amount ||
            amount < 0
        ) {

            showNotification(
                "Iltimos, barcha maydonlarni to‘ldiring."
            );

            return;

        }


        addTransaction(
            name,
            client,
            amount,
            status,
            type
        );


        transactionForm.reset();


        typeOptions.forEach(
            item => {
                item.classList.remove(
                    "active"
                );
            }
        );


        typeOptions[0].classList.add(
            "active"
        );


        document.querySelector(
            'input[value="income"]'
        ).checked = true;


        closeTransactionModal();


        showNotification(
            "Yangi tranzaksiya qo‘shildi!"
        );

    }
);


/* ==========================================
   ADD TRANSACTION TO LIST
========================================== */

function addTransaction(
    name,
    client,
    amount,
    status,
    type
) {

    const list =
        document.getElementById(
            "transactionList"
        );


    const row =
        document.createElement("div");


    row.className =
        "transaction";


    const isIncome =
        type === "income";


    const iconClass =
        isIncome
            ? "income"
            : "expense";


    const amountClass =
        isIncome
            ? "income-text"
            : "expense-text";


    const icon =
        isIncome
            ? "↗"
            : "↘";


    const sign =
        isIncome
            ? "+"
            : "-";


    const statusClass =
        status === "To‘langan"
            ? "paid"
            : "pending";


    const now =
        new Date();


    const time =
        now.toLocaleTimeString(
            "uz-UZ",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    row.innerHTML = `

        <div class="transaction-icon ${iconClass}">
            ${icon}
        </div>


        <div class="transaction-info">

            <strong>
                ${escapeHTML(name)}
            </strong>

            <span>
                Bugun, ${time}
            </span>

        </div>


        <div class="transaction-client">
            ${escapeHTML(client)}
        </div>


        <div class="transaction-amount ${amountClass}">
            ${sign}$${amount.toLocaleString(
                "en-US",
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            )}
        </div>


        <span class="transaction-status ${statusClass}">
            ${escapeHTML(status)}
        </span>

    `;


    list.prepend(row);

}


/* ==========================================
   SEARCH
========================================== */

const searchInput =
    document.getElementById(
        "transactionSearch"
    );


searchInput.addEventListener(
    "input",
    function() {

        const search =
            this.value
                .toLowerCase()
                .trim();


        const transactions =
            document.querySelectorAll(
                ".transaction"
            );


        transactions.forEach(
            transaction => {

                const text =
                    transaction.textContent
                        .toLowerCase();


                if (
                    text.includes(search)
                ) {

                    transaction.style.display =
                        "grid";

                } else {

                    transaction.style.display =
                        "none";

                }

            }
        );

    }
);


/* ==========================================
   NOTIFICATION
========================================== */

let toastTimer;


function showNotification(
    message
) {

    const toast =
        document.getElementById(
            "toast"
        );


    const text =
        toast.querySelector("p");


    text.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            function() {

                toast.classList.remove(
                    "show"
                );

            },
            2600
        );

}


/* ==========================================
   ESCAPE HTML
========================================== */

function escapeHTML(value) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        value;

    return div.innerHTML;

}


/* ==========================================
   ESC CLOSE MODAL
========================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeTransactionModal();

        }

    }
);


/* ==========================================
   NAVIGATION
========================================== */

const navItems =
    document.querySelectorAll(
        ".nav-item"
    );


navItems.forEach(item => {

    item.addEventListener(
        "click",
        function(event) {

            event.preventDefault();


            navItems.forEach(
                nav => {
                    nav.classList.remove(
                        "active"
                    );
                }
            );


            this.classList.add(
                "active"
            );


            const title =
                this
                    .querySelector("span:last-child")
                    ?.textContent
                    ?.trim();


            if (
                title &&
                title !== "Dashboard"
            ) {

                showNotification(
                    `${title} bo‘limi hozircha demo rejimida`
                );

            }

        }
    );

});


/* ==========================================
   INITIAL EFFECT
========================================== */

window.addEventListener(
    "load",
    function() {

        setTimeout(
            function() {

                showNotification(
                    "VELORA Dashboard ishga tushdi!"
                );

            },
            600
        );

    }
);
/* =========================================
   ACOLHE
   JavaScript
========================================= */


/* =========================================
   TEMA
========================================= */

const themeBtn =
    document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("acolhe-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const dark =
        document.body.classList.contains("dark");

    themeBtn.textContent =
        dark ? "☀️" : "🌙";

    localStorage.setItem(
        "acolhe-theme",
        dark ? "dark" : "light"
    );

});


/* =========================================
   CHECK-IN EMOCIONAL
========================================= */

const emotions =
    document.querySelectorAll(".emotion");

const emotionMessage =
    document.getElementById("emotionMessage");

const checkinCount =
    document.getElementById("checkinCount");


let totalCheckins =
    Number(
        localStorage.getItem("acolhe-checkins")
    ) || 0;


checkinCount.textContent =
    totalCheckins;


emotions.forEach(emotion => {

    emotion.addEventListener("click", () => {

        const message =
            emotion.dataset.message;

        emotionMessage.innerHTML = `
            <span>💜</span>
            <p>${message}</p>
        `;

        totalCheckins++;

        localStorage.setItem(
            "acolhe-checkins",
            totalCheckins
        );

        checkinCount.textContent =
            totalCheckins;

        emotionMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});


/* =========================================
   RESPIRAÇÃO
========================================= */

const breathingCircle =
    document.querySelector(".breathing-circle");

const breathingText =
    document.getElementById("breathingText");

const breathingStatus =
    document.getElementById("breathingStatus");

const startBreathing =
    document.getElementById("startBreathing");

const durationButtons =
    document.querySelectorAll(
        ".duration-buttons button"
    );

const breathingCount =
    document.getElementById("breathingCount");


let selectedTime = 60;

let breathingTimer = null;

let breathingRunning = false;

let totalBreathing =
    Number(
        localStorage.getItem(
            "acolhe-breathing"
        )
    ) || 0;


breathingCount.textContent =
    totalBreathing;


durationButtons.forEach(button => {

    button.addEventListener("click", () => {

        durationButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedTime =
            Number(button.dataset.time);

        breathingStatus.textContent =
            `${selectedTime / 60} minuto(s) selecionado(s).`;

    });

});


function breathingCycle() {

    if (!breathingRunning) return;


    breathingCircle.classList.remove("exhale");

    breathingCircle.classList.add("inhale");

    breathingText.textContent =
        "Inspire";


    setTimeout(() => {

        if (!breathingRunning) return;

        breathingText.textContent =
            "Segure";

    }, 4000);


    setTimeout(() => {

        if (!breathingRunning) return;

        breathingCircle.classList.remove(
            "inhale"
        );

        breathingCircle.classList.add(
            "exhale"
        );

        breathingText.textContent =
            "Expire";

    }, 7000);


    breathingTimer =
        setTimeout(
            breathingCycle,
            11000
        );

}


startBreathing.addEventListener(
    "click",
    () => {

        if (breathingRunning) {

            breathingRunning = false;

            clearTimeout(
                breathingTimer
            );

            breathingCircle.classList.remove(
                "inhale",
                "exhale"
            );

            breathingText.textContent =
                "Pausa";

            startBreathing.textContent =
                "🌬️ Começar";

            breathingStatus.textContent =
                "Quando quiser, você pode tentar novamente.";

            return;
        }


        breathingRunning = true;

        startBreathing.textContent =
            "⏹️ Parar";

        breathingStatus.textContent =
            "Respire devagar e acompanhe o círculo.";

        breathingCycle();


        setTimeout(() => {

            if (!breathingRunning) return;

            breathingRunning = false;

            clearTimeout(
                breathingTimer
            );

            breathingCircle.classList.remove(
                "inhale",
                "exhale"
            );

            breathingText.textContent =
                "Concluído 💜";

            startBreathing.textContent =
                "🌬️ Começar novamente";

            totalBreathing++;

            localStorage.setItem(
                "acolhe-breathing",
                totalBreathing
            );

            breathingCount.textContent =
                totalBreathing;

        }, selectedTime * 1000);

    }
);


/* =========================================
   DIÁRIO
========================================= */

const diaryText =
    document.getElementById("diaryText");

const saveDiary =
    document.getElementById("saveDiary");

const diaryEntries =
    document.getElementById("diaryEntries");

const diaryCount =
    document.getElementById("diaryCount");

const saveStatus =
    document.getElementById("saveStatus");


let diary =
    JSON.parse(
        localStorage.getItem(
            "acolhe-diary"
        )
    ) || [];


function renderDiary() {

    diaryEntries.innerHTML = "";

    diary.forEach((entry, index) => {

        const article =
            document.createElement("article");

        article.className = "entry";

        article.innerHTML = `
            <small>${entry.date}</small>
            <p>${escapeHTML(entry.text)}</p>
            <button
                class="delete-entry"
                data-index="${index}">
                Excluir
            </button>
        `;

        diaryEntries.appendChild(article);

    });


    diaryCount.textContent =
        diary.length;


    document
        .querySelectorAll(".delete-entry")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );

                    diary.splice(index, 1);

                    localStorage.setItem(
                        "acolhe-diary",
                        JSON.stringify(diary)
                    );

                    renderDiary();

                }
            );

        });

}


function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


saveDiary.addEventListener(
    "click",
    () => {

        const text =
            diaryText.value.trim();

        if (!text) {

            saveStatus.textContent =
                "Escreva alguma coisa antes de salvar. 💜";

            return;

        }


        const date =
            new Date().toLocaleString(
                "pt-BR"
            );


        diary.unshift({

            date: date,

            text: text

        });


        localStorage.setItem(
            "acolhe-diary",
            JSON.stringify(diary)
        );


        diaryText.value = "";


        saveStatus.textContent =
            "Reflexão salva neste dispositivo. 🌿";


        renderDiary();

    }
);


renderDiary();


/* =========================================
   SÓ POR HOJE
========================================= */

const todayChecks =
    document.querySelectorAll(
        ".today-check"
    );

const todayProgress =
    document.getElementById(
        "todayProgress"
    );

const todayMessage =
    document.getElementById(
        "todayMessage"
    );

const activityCount =
    document.getElementById(
        "activityCount"
    );


let completedActivities =
    Number(
        localStorage.getItem(
            "acolhe-activities"
        )
    ) || 0;


activityCount.textContent =
    completedActivities;


function updateToday() {

    const total =
        todayChecks.length;

    const completed =
        [...todayChecks]
        .filter(check => check.checked)
        .length;


    const percentage =
        (completed / total) * 100;


    todayProgress.style.width =
        `${percentage}%`;


    if (completed === 0) {

        todayMessage.textContent =
            "Você não precisa completar tudo. 🌱";

    }

    else if (completed < total) {

        todayMessage.textContent =
            `${completed} pequeno(s) cuidado(s) hoje. Continue no seu ritmo. 💜`;

    }

    else {

        todayMessage.textContent =
            "Você cuidou de você hoje. Isso importa. 🌿";

    }


    localStorage.setItem(
        "acolhe-today",
        JSON.stringify(
            [...todayChecks].map(
                check => check.checked
            )
        )
    );

}


todayChecks.forEach(check => {

    check.addEventListener(
        "change",
        () => {

            if (check.checked) {

                completedActivities++;

                localStorage.setItem(
                    "acolhe-activities",
                    completedActivities
                );

                activityCount.textContent =
                    completedActivities;

            }

            updateToday();

        }
    );

});


const savedToday =
    JSON.parse(
        localStorage.getItem(
            "acolhe-today"
        )
    );


if (savedToday) {

    todayChecks.forEach(
        (check, index) => {

            check.checked =
                savedToday[index] || false;

        }
    );

}


updateToday();


/* =========================================
   ANIMAÇÃO DE ENTRADA
========================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.08
        }
    );


document
    .querySelectorAll(
        ".section-heading, .emotion, .activity, .today-card, .diary, .progress-card"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });

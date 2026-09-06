/* =====================================================
   ACOLHE 2.0
   JavaScript
===================================================== */


/* =====================================================
   TEMA
===================================================== */

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

    const isDark =
        document.body.classList.contains("dark");

    themeBtn.textContent =
        isDark ? "☀️" : "🌙";

    localStorage.setItem(
        "acolhe-theme",
        isDark ? "dark" : "light"
    );

});


/* =====================================================
   FRASES DO DIA
===================================================== */

const dailyMessages = [

    "Hoje também é um bom dia para tratar você com gentileza.",

    "Você não precisa fazer tudo de uma vez.",

    "Um pequeno passo ainda é um passo.",

    "Vá no seu ritmo.",

    "Você merece uma pausa.",

    "Nem todo dia precisa ser produtivo.",

    "Respire. Você chegou até aqui.",

    "Cuide de você com a mesma gentileza que oferece aos outros.",

    "Hoje pode ser simplesmente sobre continuar.",

    "Não tenha pressa para resolver tudo.",

    "Permita-se descansar.",

    "Você não precisa ter todas as respostas.",

    "Faça o que estiver ao seu alcance hoje.",

    "Pequenos cuidados também importam.",

    "Você pode começar novamente quantas vezes precisar.",

    "Talvez o próximo passo seja apenas respirar.",

    "Não transforme um dia difícil em uma cobrança contra você.",

    "Você também merece dias leves.",

    "Um momento de cada vez.",

    "Seja gentil com a pessoa que você está sendo hoje.",

    "Você não precisa provar nada o tempo inteiro.",

    "Algumas coisas podem esperar.",

    "Desacelerar também é avançar.",

    "Hoje, escolha um pouco mais de calma.",

    "Você merece espaço para simplesmente existir."

];


const dailyMessage =
    document.getElementById("dailyMessage");

const newDailyMessage =
    document.getElementById(
        "newDailyMessage"
    );


function randomItem(array) {

    return array[
        Math.floor(
            Math.random() * array.length
        )
    ];

}


newDailyMessage.addEventListener(
    "click",
    () => {

        dailyMessage.textContent =
            randomItem(dailyMessages);

    }
);


/* =====================================================
   FRASES DAS EMOÇÕES
===================================================== */

const emotionMessages = {

    ansioso: [

        "Respire. Você não precisa resolver tudo agora.",

        "Um pensamento de cada vez.",

        "Você pode desacelerar.",

        "Nem todo pensamento precisa de uma resposta.",

        "Faça uma pausa antes de tentar resolver qualquer coisa.",

        "Inspire devagar. Você está aqui.",

        "O agora é o único momento que precisa da sua atenção.",

        "Você não precisa antecipar todos os próximos passos.",

        "Dê ao seu corpo alguns minutos de calma.",

        "Talvez hoje você possa fazer menos.",

        "Respire fundo e permita que o momento passe.",

        "Você pode escolher apenas uma coisa para cuidar agora.",

        "Não precisa ter todas as respostas.",

        "Aos poucos, as coisas podem ficar mais claras.",

        "Seus pensamentos podem estar acelerados; você não precisa acompanhá-los.",

        "Pare por um instante e observe sua respiração.",

        "Você pode deixar algumas preocupações para depois.",

        "Um pequeno passo ainda é um passo.",

        "Seja gentil consigo enquanto esse momento passa.",

        "Você pode voltar sua atenção para aquilo que está ao seu alcance.",

        "Não é preciso resolver o futuro neste instante.",

        "Permita que sua respiração fique um pouco mais lenta.",

        "Você pode fazer uma coisa de cada vez.",

        "Talvez o próximo passo seja simplesmente parar por alguns minutos.",

        "Você está aqui. Volte para este momento."

    ],


    triste: [

        "Você não precisa fingir que está tudo bem.",

        "Permita-se sentir sem se cobrar pressa.",

        "Um dia difícil não define a sua história.",

        "Seja gentil consigo hoje.",

        "Você merece acolhimento também nos dias difíceis.",

        "Não há problema em precisar de um pouco de tempo.",

        "Talvez hoje seja um dia para ir mais devagar.",

        "Você não precisa carregar tudo sozinho(a).",

        "Se puder, procure alguém em quem confia.",

        "Seus sentimentos merecem espaço.",

        "Não transforme um momento difícil em uma cobrança contra você.",

        "Você pode simplesmente existir por enquanto.",

        "Faça algo pequeno que traga um pouco de conforto.",

        "Nem todos os dias precisam ser bons.",

        "A tristeza pode mudar, mesmo quando parece demorar.",

        "Cuide de você como cuidaria de alguém querido.",

        "Hoje, tente falar consigo com mais carinho.",

        "Você merece descansar da necessidade de parecer forte.",

        "Um pouco de cuidado já é suficiente por agora.",

        "Fique perto de quem faz você se sentir acolhido(a).",

        "Não tenha pressa para sair desse sentimento.",

        "Você pode pedir companhia.",

        "Permita-se ter um dia mais lento.",

        "Seu sentimento merece ser ouvido.",

        "Você não precisa atravessar este momento fingindo que não dói."

    ],


    sobrecarregado: [

        "Você não precisa carregar tudo ao mesmo tempo.",

        "Escolha apenas a próxima coisa.",

        "O restante pode esperar alguns minutos.",

        "Faça uma pausa. Depois você decide o próximo passo.",

        "Nem toda demanda precisa ser resolvida imediatamente.",

        "Você pode dizer 'agora não'.",

        "Organize uma coisa por vez.",

        "Seu descanso também merece espaço.",

        "Talvez seja hora de diminuir o ritmo.",

        "Você não precisa dar conta de tudo sozinho(a).",

        "Respire antes de continuar.",

        "Escolha o que é realmente importante agora.",

        "Algumas coisas podem ficar para amanhã.",

        "Não confunda produtividade com cuidado.",

        "Você pode parar por alguns minutos sem culpa.",

        "Simplifique o que puder.",

        "Faça uma pequena pausa antes de tomar decisões.",

        "Não precisa resolver a semana inteira hoje.",

        "Comece pelo que está ao seu alcance.",

        "Uma pausa também é uma forma de continuar.",

        "Você pode reduzir a lista.",

        "Nem tudo precisa da sua atenção agora.",

        "Escolha uma prioridade e deixe o resto respirar.",

        "Você tem permissão para fazer menos.",

        "Não carregue hoje aquilo que pode esperar."

    ],


    sozinho: [

        "Você merece ser ouvido(a).",

        "Se puder, mande uma mensagem para alguém de confiança.",

        "Você não precisa guardar tudo em silêncio.",

        "Sua presença importa.",

        "Talvez alguém também esteja esperando uma mensagem sua.",

        "Procure uma pessoa com quem você se sinta seguro(a).",

        "Você merece conexões que tragam acolhimento.",

        "Não tenha vergonha de dizer que precisa de companhia.",

        "Às vezes, um simples 'oi' pode ser o começo de uma conversa.",

        "Você pode pedir ajuda para atravessar um momento difícil.",

        "Não precisa enfrentar tudo em silêncio.",

        "Se estiver ao seu alcance, fique perto de alguém querido.",

        "Você merece ter um espaço onde possa ser você.",

        "Falar sobre o que sente pode ser um primeiro passo.",

        "Permita-se procurar companhia.",

        "Você não precisa parecer forte o tempo todo.",

        "Existe valor em deixar alguém saber como você está.",

        "Cuide da sua necessidade de conexão.",

        "Talvez hoje seja um bom dia para procurar alguém.",

        "Você merece ser acolhido(a).",

        "Uma conversa pode começar com uma simples mensagem.",

        "Você pode dizer apenas: 'Hoje eu não estou muito bem.'",

        "Não diminua a importância daquilo que você está sentindo.",

        "Procure estar perto de quem faz bem a você.",

        "Você merece companhia, cuidado e escuta."

    ],


    energia: [

        "Descansar também é fazer algo por você.",

        "Você não precisa ser produtivo(a) o tempo inteiro.",

        "Faça apenas o que for possível hoje.",

        "Comece pelo básico.",

        "Beba um pouco de água.",

        "Permita-se diminuir o ritmo.",

        "Seu corpo também precisa de cuidado.",

        "Talvez uma pausa seja exatamente o que você precisa.",

        "Não transforme cansaço em culpa.",

        "Você pode fazer menos hoje.",

        "Um pequeno cuidado já conta.",

        "Se puder, dê alguns minutos para descansar.",

        "Não é preciso estar no seu máximo todos os dias.",

        "Respeite os limites que seu corpo está mostrando.",

        "Faça uma coisa simples e depois descanse.",

        "Você não precisa provar nada hoje.",

        "Seu valor não depende do quanto você produz.",

        "Vá devagar.",

        "Cuide primeiro de você.",

        "Hoje também pode ser um dia de recuperação.",

        "Talvez o mais importante agora seja parar um pouco.",

        "Não transforme descanso em culpa.",

        "Faça somente o necessário.",

        "Seu corpo merece ser escutado.",

        "Você pode recomeçar depois de descansar."

    ],


    confuso: [

        "Você não precisa descobrir tudo agora.",

        "Comece por uma coisa pequena.",

        "Respire e organize apenas o próximo passo.",

        "Nem toda decisão precisa ser tomada hoje.",

        "Dê espaço para seus pensamentos.",

        "Talvez uma pausa ajude a enxergar melhor.",

        "Escreva o que está passando pela sua cabeça.",

        "Separe o que você pode controlar do que não pode.",

        "Uma coisa de cada vez.",

        "Você pode mudar de ideia.",

        "Não ter certeza também faz parte.",

        "Dê tempo para as respostas aparecerem.",

        "Não se cobre clareza imediata.",

        "Comece pelo que você sabe.",

        "Simplifique a decisão.",

        "Pergunte a si mesmo(a): o que eu preciso agora?",

        "Talvez você só precise descansar antes de decidir.",

        "Não precisa resolver tudo em um único momento.",

        "Organize seus pensamentos com calma.",

        "O próximo passo não precisa ser perfeito.",

        "Faça uma lista pequena.",

        "Escolha somente uma coisa para pensar agora.",

        "Algumas respostas aparecem quando deixamos de pressioná-las.",

        "Você pode esperar antes de decidir.",

        "Tudo bem não saber ainda."

    ],


    melhor: [

        "Que bom encontrar um pouco de leveza hoje. 🌱",

        "Aproveite esse momento sem se cobrar.",

        "Dias mais leves também merecem ser celebrados.",

        "Guarde essa sensação.",

        "Permita-se aproveitar o que está bom.",

        "Você chegou até aqui.",

        "Hoje pode ser um bom dia para cuidar de você.",

        "Celebre os pequenos momentos.",

        "Que essa sensação dure um pouco mais.",

        "Você merece momentos tranquilos.",

        "Não precisa transformar um momento bom em produtividade.",

        "Apenas aproveite.",

        "Respire e perceba como você está agora.",

        "Há beleza nos pequenos momentos.",

        "Continue cuidando desse espaço dentro de você.",

        "Hoje está mais leve. Fique um pouco aqui.",

        "Você também merece dias assim.",

        "Reconheça o que melhorou.",

        "Um momento de paz já pode significar muito.",

        "Que bom ter você aqui hoje. 💜",

        "Permita-se sorrir sem culpa.",

        "Você pode simplesmente aproveitar.",

        "Guarde este pequeno momento para você.",

        "Que essa leveza encontre espaço no seu dia.",

        "Hoje, fique perto daquilo que faz bem."

    ],


    outra: [

        "Você pode colocar em palavras o que está sentindo.",

        "Não precisa encontrar as palavras perfeitas.",

        "Escreva como vier.",

        "Este espaço é seu.",

        "Talvez escrever ajude a organizar o que está dentro.",

        "Não precisa fazer sentido para ninguém.",

        "Coloque para fora sem se julgar.",

        "Você pode começar com: 'Hoje eu estou...'",

        "Às vezes, escrever já é uma pequena forma de cuidado.",

        "O que você gostaria que alguém entendesse sobre você hoje?",

        "Pode escrever uma palavra ou uma página inteira.",

        "Não existe maneira certa de colocar sentimentos no papel.",

        "Comece pelo que mais está ocupando sua cabeça.",

        "Você pode simplesmente desabafar.",

        "Dê nome ao que conseguir.",

        "Não se preocupe em escrever bonito.",

        "Escreva para você.",

        "Talvez seu primeiro passo seja simplesmente começar.",

        "Tudo bem se você ainda não souber explicar.",

        "Coloque para fora. Sem pressa. 🌿",

        "Você pode começar pelo que mais está incomodando.",

        "Não precisa organizar antes de escrever.",

        "Uma frase já pode ser suficiente.",

        "Escreva aquilo que você gostaria de dizer e ainda não conseguiu.",

        "Às vezes, colocar em palavras muda a forma como enxergamos aquilo."

    ]

};


/* =====================================================
   CHECK-IN
===================================================== */

const emotions =
    document.querySelectorAll(".emotion");

const emotionText =
    document.getElementById("emotionText");

const anotherEmotionMessage =
    document.getElementById(
        "anotherEmotionMessage"
    );

const checkinCount =
    document.getElementById("checkinCount");


let totalCheckins =
    Number(
        localStorage.getItem(
            "acolhe-checkins"
        )
    ) || 0;


let currentEmotion = null;

let lastEmotionMessage = null;


checkinCount.textContent =
    totalCheckins;


function getDifferentMessage(
    messages,
    previous
) {

    if (messages.length <= 1) {

        return messages[0];

    }


    let message;

    do {

        message =
            randomItem(messages);

    } while (
        message === previous
    );


    return message;

}


function showEmotionMessage(
    emotion
) {

    const messages =
        emotionMessages[emotion];

    const message =
        getDifferentMessage(
            messages,
            lastEmotionMessage
        );


    currentEmotion = emotion;

    lastEmotionMessage = message;

    emotionText.textContent =
        message;

    anotherEmotionMessage.hidden =
        false;

}


emotions.forEach(emotion => {

    emotion.addEventListener(
        "click",
        () => {

            const type =
                emotion.dataset.emotion;

            showEmotionMessage(type);


            totalCheckins++;

            localStorage.setItem(
                "acolhe-checkins",
                totalCheckins
            );


            checkinCount.textContent =
                totalCheckins;


            updateAchievements();

        }
    );

});


anotherEmotionMessage.addEventListener(
    "click",
    () => {

        if (currentEmotion) {

            showEmotionMessage(
                currentEmotion
            );

        }

    }
);


/* =====================================================
   RESPIRAÇÃO
===================================================== */

const breathingCircle =
    document.getElementById(
        "breathingCircle"
    );

const breathingText =
    document.getElementById(
        "breathingText"
    );

const breathingTimer =
    document.getElementById(
        "breathingTimer"
    );

const breathingStatus =
    document.getElementById(
        "breathingStatus"
    );

const startBreathing =
    document.getElementById(
        "startBreathing"
    );

const durationButtons =
    document.querySelectorAll(
        ".duration-buttons button"
    );

const breathingCount =
    document.getElementById(
        "breathingCount"
    );


let selectedTime = 60;

let breathingRunning = false;

let breathingInterval = null;

let breathingTimeout = null;

let breathingStart = 0;

let totalBreathing =
    Number(
        localStorage.getItem(
            "acolhe-breathing"
        )
    ) || 0;


breathingCount.textContent =
    totalBreathing;


durationButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            durationButtons.forEach(
                btn =>
                    btn.classList.remove(
                        "active"
                    )
            );


            button.classList.add(
                "active"
            );


            selectedTime =
                Number(
                    button.dataset.time
                );


            breathingStatus.textContent =
                `${selectedTime / 60} minuto(s) selecionado(s).`;

        }
    );

});


function formatTime(seconds) {

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        seconds % 60;


    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

}


function breathingCycle() {

    if (!breathingRunning) return;


    breathingCircle.classList.remove(
        "exhale"
    );

    breathingCircle.classList.add(
        "inhale"
    );

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


    setTimeout(() => {

        if (breathingRunning) {

            breathingCycle();

        }

    }, 11000);

}


function finishBreathing() {

    breathingRunning = false;


    clearInterval(
        breathingInterval
    );


    clearTimeout(
        breathingTimeout
    );


    breathingCircle.classList.remove(
        "inhale",
        "exhale"
    );


    breathingText.textContent =
        "Concluído 💜";


    breathingStatus.textContent =
        "Você reservou alguns minutos para você.";


    startBreathing.textContent =
        "🌬️ Começar novamente";


    totalBreathing++;


    localStorage.setItem(
        "acolhe-breathing",
        totalBreathing
    );


    breathingCount.textContent =
        totalBreathing;


    updateAchievements();

}


function stopBreathing() {

    breathingRunning = false;


    clearInterval(
        breathingInterval
    );


    clearTimeout(
        breathingTimeout
    );


    breathingCircle.classList.remove(
        "inhale",
        "exhale"
    );


    breathingText.textContent =
        "Pausa";


    breathingStatus.textContent =
        "Quando quiser, você pode tentar novamente.";


    startBreathing.textContent =
        "🌬️ Começar";

}


startBreathing.addEventListener(
    "click",
    () => {

        if (breathingRunning) {

            stopBreathing();

            return;

        }


        breathingRunning = true;

        breathingStart =
            Date.now();


        startBreathing.textContent =
            "⏹️ Parar";


        breathingStatus.textContent =
            "Respire devagar e acompanhe o círculo.";


        breathingCycle();


        breathingInterval =
            setInterval(() => {

                const elapsed =
                    Math.floor(
                        (
                            Date.now()
                            - breathingStart
                        ) / 1000
                    );


                const remaining =
                    Math.max(
                        0,
                        selectedTime - elapsed
                    );


                breathingTimer.textContent =
                    formatTime(remaining);


                if (remaining <= 0) {

                    finishBreathing();

                }

            }, 250);

    }
);


/* =====================================================
   DIÁRIO
===================================================== */

const diaryText =
    document.getElementById(
        "diaryText"
    );

const saveDiary =
    document.getElementById(
        "saveDiary"
    );

const diaryEntries =
    document.getElementById(
        "diaryEntries"
    );

const diaryCount =
    document.getElementById(
        "diaryCount"
    );

const diaryCountLabel =
    document.getElementById(
        "diaryCountLabel"
    );

const saveStatus =
    document.getElementById(
        "saveStatus"
    );


let diary =
    JSON.parse(
        localStorage.getItem(
            "acolhe-diary"
        )
    ) || [];


function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent = text;

    return div.innerHTML;

}


function renderDiary() {

    diaryEntries.innerHTML = "";


    if (diary.length === 0) {

        diaryEntries.innerHTML = `
            <div class="entry">
                <p>
                    Ainda não há reflexões salvas.
                    Quando quiser, escreva alguma coisa. 🌿
                </p>
            </div>
        `;

    }


    diary.forEach(
        (entry, index) => {

            const article =
                document.createElement(
                    "article"
                );


            article.className =
                "entry";


            article.innerHTML = `
                <small>
                    ${escapeHTML(entry.date)}
                </small>

                <p>
                    ${escapeHTML(entry.text)}
                </p>

                <button
                    class="delete-entry"
                    data-index="${index}">
                    Excluir reflexão
                </button>
            `;


            diaryEntries.appendChild(
                article
            );

        }
    );


    diaryCount.textContent =
        diary.length;


    diaryCountLabel.textContent =
        diary.length === 1
            ? "1 reflexão"
            : `${diary.length} reflexões`;


    document
        .querySelectorAll(
            ".delete-entry"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );


                    diary.splice(
                        index,
                        1
                    );


                    localStorage.setItem(
                        "acolhe-diary",
                        JSON.stringify(
                            diary
                        )
                    );


                    renderDiary();

                    updateAchievements();

                }
            );

        });

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


        diary.unshift({

            date:
                new Date().toLocaleString(
                    "pt-BR"
                ),

            text

        });


        localStorage.setItem(
            "acolhe-diary",
            JSON.stringify(
                diary
            )
        );


        diaryText.value = "";


        saveStatus.textContent =
            "Reflexão salva neste dispositivo. 🌿";


        renderDiary();

        updateAchievements();

    }
);


renderDiary();


/* =====================================================
   SÓ POR HOJE
===================================================== */

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

const todayPercentage =
    document.getElementById(
        "todayPercentage"
    );

const activityCount =
    document.getElementById(
        "activityCount"
    );


let totalActivities =
    Number(
        localStorage.getItem(
            "acolhe-activities"
        )
    ) || 0;


activityCount.textContent =
    totalActivities;


function updateToday() {

    const total =
        todayChecks.length;


    const completed =
        [
            ...todayChecks
        ].filter(
            check =>
                check.checked
        ).length;


    const percentage =
        Math.round(
            (
                completed / total
            ) * 100
        );


    todayProgress.style.width =
        `${percentage}%`;


    todayPercentage.textContent =
        `${percentage}%`;


    if (completed === 0) {

        todayMessage.textContent =
            "Comece com uma pequena coisa. 🌱";

    }

    else if (
        completed < total
    ) {

        todayMessage.textContent =
            `${completed} cuidado(s) hoje. Continue no seu ritmo. 💜`;

    }

    else {

        todayMessage.textContent =
            "Você cuidou de você hoje. Isso importa. 🌿";

    }


    localStorage.setItem(
        "acolhe-today",
        JSON.stringify(
            [
                ...todayChecks
            ].map(
                check =>
                    check.checked
            )
        )
    );

}


todayChecks.forEach(
    check => {

        check.addEventListener(
            "change",
            () => {

                if (check.checked) {

                    totalActivities++;


                    localStorage.setItem(
                        "acolhe-activities",
                        totalActivities
                    );


                    activityCount.textContent =
                        totalActivities;

                }


                updateToday();

                updateAchievements();

            }
        );

    }
);


const savedToday =
    JSON.parse(
        localStorage.getItem(
            "acolhe-today"
        )
    );


if (savedToday) {

    todayChecks.forEach(
        (
            check,
            index
        ) => {

            check.checked =
                savedToday[index] ||
                false;

        }
    );

}


updateToday();


/* =====================================================
   CONQUISTAS
===================================================== */

const achievementFirst =
    document.getElementById(
        "achievementFirst"
    );

const achievementBreath =
    document.getElementById(
        "achievementBreath"
    );

const achievementDiary =
    document.getElementById(
        "achievementDiary"
    );

const achievementCare =
    document.getElementById(
        "achievementCare"
    );


function unlockAchievement(
    element
) {

    element.classList.add(
        "unlocked"
    );

    const lock =
        element.querySelector("b");

    if (lock) {

        lock.textContent =
            "✓";

    }

}


function updateAchievements() {

    if (totalCheckins > 0) {

        unlockAchievement(
            achievementFirst
        );

    }


    if (totalBreathing > 0) {

        unlockAchievement(
            achievementBreath
        );

    }


    if (diary.length > 0) {

        unlockAchievement(
            achievementDiary
        );

    }


    if (totalActivities > 0) {

        unlockAchievement(
            achievementCare
        );

    }

}


updateAchievements();


/* =====================================================
   ANIMAÇÃO DE ENTRADA
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".emotion, .breathing-card, .diary-card, .today-card, .activity-card, .achievement, .progress-card"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: .08
        }
    );


revealElements.forEach(
    element => {

        element.classList.add(
            "reveal"
        );

        revealObserver.observe(
            element
        );

    }
);

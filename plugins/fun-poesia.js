let handler = async (message, { conn, text }) => {
    // Controlla se è stato indicato un nome
    if (!text) {
        await conn.reply(message.chat, "❌ Uso corretto: `.poesia <nome>` per generare una poesia divertente!", message);
        return;
    }

    // Raccolta di poesie ironiche e satiriche
    let poetryCollection = [
        `😂 *Ode a ${text}*\n\n${text}, maestro di procrastinazione, \nriesci a posticipare anche una colazione. \nCon un sorriso conquisti ogni umano, \nma per favore, posa quel telecomando in mano!\n🍿`,
        `🍕 *${text}, il sovrano del divano*\n\nOh ${text}, dominatore della pigrizia estrema, \nse ci fosse un trono, saresti il re del cinema. \nTra pizza e popcorn fai il tuo banchetto, \nma l'esercizio fisico... non è nel tuo progetto.\n🏆`,
        `🐱 *${text}, il sognatore*\n\n${text}, che guarda il mondo da un oblò, \nmentre il gatto ti osserva con aria da CEO. \nSogni di gloria mentre prendi il caffè, \nma la realtà? È che sei ancora in pigiama, eh!\n☕`,
        `💻 *${text}, il coder misterioso*\n\n${text}, scrivi codice che pochi capiranno, \nma in effetti... nemmeno tu lo compagnerai domani. \nCon caffeina e bug combatti il destino, \nma quel "compila" rimane sempre un casino.\n🔥`,
        `🍩 *${text}, il golosone d'élite*\n\n${text}, maestro delle calorie infinite, \nun biscotto per te è una riserva di vite. \nTra dolci e gelati conquisti il regno, \nil tuo motto è: "Un altro, e poi mi impegno!".\n🎂`,
        `🕺 *${text}, ballerino della vita*\n\n${text}, le tue mosse sono arte pura, \nun misto tra genialità e censura. \nSul dancefloor dai tutto te stesso, \nma il pubblico ride... con te o di te, è un successo!\n🎉`,
        `🍔 *${text}, il re degli snack*\n\n${text}, con patatine in mano ti trovi a tuo agio, \nnon hai bisogno di un castello, solo del tuo coraggio. \nChe sia notte o mattino, sei sempre in missione, \ncaccia allo snack con pura dedizione.\n🥤`,
        `🐕 *${text}, il leader del branco*\n\n${text}, guida con stile e fierezza, \nma al primo guaito... scappi con leggerezza! \nUn cuore grande, ma un po' pasticcione, \nil tuo regno è fatto di biscotti e di attenzione.\n🐾`,
        `⏰ *${text}, il procrastinatore di classe*\n\n${text}, maestro del "lo faccio domani", \nma quando arriva quel domani rimandi... da anni. \nTra caffè e scuse sei una leggenda, \nma sul divano nessuno ti contenda.\n🛋️`,
        `🎮 *${text}, il campione delle console*\n\n${text}, con un joystick in mano sei imbattibile, \ntranne quando perdi... allora sei incredibile! \nTra pixel e mondi salvi l'umanità, \nma nella vita reale... dove sarà?\n🎲`,
        `🏋️ *${text}, l'atleta interiore*\n\n${text}, pensi sempre al fitness e alla dieta, \nma poi finisci con una pizza completa. \nUn abbonamento in palestra che mai sfrutterai, \neppure davanti allo specchio sei un samurai!\n💪`,
        `🎩 *${text}, il mago dell'improvvisazione*\n\n${text}, con battute pronte e zero paura, \nhai la capacità di trasformare tutto in avventura. \nChe sia un problema o un errore banale, \ncon il tuo charme diventa geniale!\n✨`,
        `📱 *${text}, il re dei social*\n\n${text}, scatti selfie come un vero artista, \ncon filtri e pose, sei sempre in lista. \nTra storie e like domini il web intero, \nma la lavastoviglie resta un mistero.\n📷`,
        `🐌 *${text}, il tranquillo maratoneta*\n\n${text}, la velocità non è la tua alleata, \ncammini con calma, una vera serenata. \nDicono che il lento vince la gara, \ne tu sicuramente ci arrivi... più tardi magari, ma ci arrivi di rara!\n🍃`
    ];

    // Seleziona una poesia casuale
    let randomPoetry = poetryCollection[Math.floor(Math.random() * poetryCollection.length)];

    // Invia la poesia al destinatario
    await conn.reply(message.chat, randomPoetry, message);
};

// Configurazione del comando
handler.command = ['poesia'];
handler.tags = ['fun', 'creative'];
handler.help = ['.poesia <nome>'];

export default handler;
let handler = async (message, { conn, text }) => {
    // Controlla se è stato indicato un nome
    if (!text) {
        await conn.reply(message.chat, "❌ Uso corretto: `.iq <nome>` per calcolare il quoziente intellettivo!", message);
        return;
    }

    // Genera un valore IQ casuale con il 40% di probabilità per il risultato specifico IQ = 73
    let randomIQ = Math.random() < 0.25 ? 73 : Math.floor(Math.random() * 101) + 50; // Gamma: 50-150

    // Frasi basate sul punteggio IQ
    let iqMessage;
    if (randomIQ === 73) {
        iqMessage = `🧠 *Calcolo IQ*\n\nIl quoziente intellettivo di *${text}* è: *${randomIQ}*\n\n🎮 Complimenti! O sei Player 73 o possiedi il suo stesso numero di cromosomi.`;
    } else if (randomIQ >= 140) {
        iqMessage = `🧠 *Calcolo IQ*\n\nIl quoziente intellettivo di *${text}* è: *${randomIQ}*\n\n👑 ${text}, sei praticamente un cervello ambulante. Le tue sinapsi probabilmente fanno jogging ogni mattina.`;
    } else if (randomIQ >= 130) {
        iqMessage = `🧠 *Calcolo IQ*\n\nIl quoziente intellettivo di *${text}* è: *${randomIQ}*\n\n🤓 ${text}, saresti perfetto per risolvere misteri complessi... o almeno per completare un cruciverba difficile.`;
    } else if (randomIQ >= 120) {
        iqMessage = `🧠 *Calcolo IQ*\n\nIl quoziente intellettivo di *${text}* è: *${randomIQ}*\n\n🔍 ${text}, hai abbastanza cervello per sembrare intelligente alle cene, ma ricorda di non esagerare con le citazioni latine.`;
    } else if (randomIQ >= 110) {
        iqMessage = `🧠 *Calcolo IQ*\n\nIl quoziente intellettivo di *${text}* è: *${randomIQ}*\n\n😏 ${text}, sei il classico tipo che sa tutto quello che serve… tranne cambiare una gomma senza il tutorial su YouTube.`;
    } else if (randomIQ >= 100) {
        iqMessage = `🧠 *Calcolo IQ*\n\nIl quoziente intellettivo di *${text}* è: *${randomIQ}*\n\n👌 ${text}, sei nella media. Non stupirai nessuno con la tua logica, ma almeno ricordi di spegnere le luci quando esci.`;
    } else if (randomIQ >= 90) {
        iqMessage = `🧠 *Calcolo IQ*\n\nIl quoziente intellettivo di *${text}* è: *${randomIQ}*\n\n🤔 ${text}, potresti avere un cervello funzionante, ma ogni tanto dimentica di accendersi. Prova a dargli una pacca!`;
    } else if (randomIQ >= 80) {
        iqMessage = `🧠 *Calcolo IQ*\n\nIl quoziente intellettivo di *${text}* è: *${randomIQ}*\n\n😅 ${text}, i tuoi pensieri sono come tartarughe: lenti, ma arrivano alla fine. Di solito.`;
    } else if (randomIQ >= 70) {
        iqMessage = `🧠 *Calcolo IQ*\n\nIl quoziente intellettivo di *${text}* è: *${randomIQ}*\n\n🙃 ${text}, hai uno stile unico. Un cervello unico. Talmente unico che ogni tanto si perde per strada.`;
    } else {
        iqMessage = `🧠 *Calcolo IQ*\n\nIl quoziente intellettivo di *${text}* è: *${randomIQ}*\n\n💀 ${text}, il tuo cervello ha deciso di andare in vacanza permanente. Probabilmente sta prendendo il sole da qualche parte.`;
    }

    // Invia il risultato al destinatario
    await conn.reply(message.chat, iqMessage, message);
};

// Configurazione del comando
handler.command = ['iq'];
handler.tags = ['fun'];
handler.help = ['.iq <nome>'];

export default handler;
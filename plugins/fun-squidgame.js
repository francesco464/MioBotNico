let handler = async (message, { conn, text }) => {
    // Controlla se è stato fornito un nome
    if (!text) {
        await conn.reply(
            message.chat,
            "❌ Uso corretto: .squidgame <nome> per scoprire quale player di Squid Game sei!",
            message
        );
        return;
    }

    // Raccolta di giocatori con descrizioni e percorsi immagine
    const players = [
        {
            name: "Player 456",
            description: `🎭 *Player 456 - ${text}, l'eroe riluttante*\n\n${text}, hai un cuore grande e una passione per i biscotti a forma di ombrello... peccato che il tuo livello di strategia sia quello di una patatina molle. Nonostante ciò, il tuo ottimismo ti fa vincere contro ogni aspettativa!`,
            imagePath: "/storage/emulated/0/Gab333/images/squidgame/player_456.png",
        },
        {
            name: "Player 067",
            description: `💎 *Player 067 - ${text}, il stratega misterioso*\n\n${text}, silenzioso ma letale. Sei il tipo che sa sempre dove nascondere il tuo biglietto del treno per evitare il controllo. Il problema? Sei anche bravo a rubare snack dalla cucina senza essere beccato.`,
            imagePath: "/storage/emulated/0/Gab333/images/squidgame/player_067.png",
        },
        {
            name: "Player 101",
            description: `👑 *Player 101 - ${text}, il tiranno carismatico*\n\n${text}, dominatore degli atteggiamenti da “Io comando”. Purtroppo, la tua idea di gioco di squadra consiste nel lasciare gli altri fare tutto il lavoro. Ma hey, almeno sei bravo a fare monologhi drammatici!`,
            imagePath: "/storage/emulated/0/Gab333/images/squidgame/player_101.png",
        },
        {
            name: "Player 218",
            description: `🧠 *Player 218 - ${text}, il genio calcolatore*\n\n${text}, il tuo cervello è una macchina perfetta... a parte quando si tratta di scegliere amici veri. Comunque, hai un talento incredibile per salvarti all'ultimo secondo e far sembrare tutto pianificato.`,
            imagePath: "/storage/emulated/0/Gab333/images/squidgame/player_218.png",
        },
        {
            name: "Player 199",
            description: `🐭 *Player 199 - ${text}, il fedele sognatore*\n\n${text}, sei il tipo che farebbe amicizia persino con il manichino del gioco del semaforo rosso. La tua ingenuità è adorabile... finché non ti accorgi che hai prestato il tuo ombrello a un traditore!`,
            imagePath: "/storage/emulated/0/Gab333/images/squidgame/player_199.png",
        },
        {
            name: "Player 230",
            description: `🔮 *Player 230 - ${text}, il misterioso manipolatore*\n\n${text}, sei l'architetto segreto delle situazioni impossibili. La tua specialità è far credere agli altri che siano loro a scegliere... mentre sei sempre tu a controllare il gioco.`,
            imagePath: "/storage/emulated/0/Gab333/images/squidgame/player_230.png",
        },
        {
            name: "Player 001",
            description: `🎲 *Player 001 - ${text}, il mastermind invisibile*\n\n${text}, dietro il tuo aspetto gentile c'è una mente brillante che muove ogni pedina. Nessuno sospetta che dietro la tua innocenza si nasconda il vero regista del caos.`,
            imagePath: "/storage/emulated/0/Gab333/images/squidgame/player_001.png",
        },
      
    ];

    // Seleziona un giocatore casualmente
    const selectedPlayer = players[Math.floor(Math.random() * players.length)];

    // Invia la descrizione al destinatario
    await conn.reply(
        message.chat,
        `🤔 *Quale giocatore di Squid Game sei?*\n\n${selectedPlayer.description}`,
        message
    );

    // Invia l'immagine del giocatore selezionato
    await conn.sendMessage(
        message.chat,
        { image: { url: selectedPlayer.imagePath }, caption: "Ecco l'immagine del tuo giocatore!" },
        { quoted: message }
    );
};

// Configurazione del comando
handler.command = ['squidgame'];
handler.tags = ['fun', 'creative'];
handler.help = ['.squidgame <nome>'];

export default handler;
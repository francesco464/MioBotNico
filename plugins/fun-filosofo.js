import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  const philosophers = [
    {
      name: "Nietzsche",
      description: "Sei il ribelle che guarda l'abisso e pensa: 'Potrei arredarlo!'",
    },
    {
      name: "Socrate",
      description: "Ti piace far domande complicate... anche quando vai al ristorante!",
    },
    {
      name: "Marx",
      description: "Sei convinto che il tuo cane si comporti meglio in un sistema collettivo!",
    },
    {
      name: "Platone",
      description: "Hai un appartamento ideale, ma nessuno può permettersi di viverci!",
    },
    {
      name: "Kant",
      description: "Segui regole così rigide che anche il tuo robot aspirapolvere ti sembra anarchico!",
    },
    {
      name: "Hegel",
      description: "La tua playlist è una dialettica tra heavy metal e musica classica."
    },
  ];

  // Seleziona un filosofo casualmente
  const randomPhilosopher = philosophers[Math.floor(Math.random() * philosophers.length)];

  // Messaggio satirico e cyberpunk
  const message = `
═══════◇🔮◇═══════
🤔 𝐂𝐡𝐢 𝐬𝐞𝐢 𝐧𝐞𝐥 𝐦𝐨𝐧𝐝𝐨 𝐝𝐞𝐥𝐥𝐚 𝐟𝐢𝐥𝐨𝐬𝐨𝐟𝐢𝐚?
━━━━━━━━━━━━━━━
👤 𝐅𝐢𝐥𝐨𝐬𝐨𝐟𝐨: ${randomPhilosopher.name}
📜 𝐃𝐢𝐬𝐜𝐫𝐢𝐳𝐢𝐨𝐧𝐞: "${randomPhilosopher.description}"
━━━━━━━━━━━━━━━
🌐 𝐒𝐭𝐢𝐥𝐞: Ironia, sarcasmo e cyberpunk!
═══════◇🔮◇═══════
`;

  conn.reply(m.chat, message, {
    contextInfo: {
      externalAdReply: {
        mediaUrl: null,
        mediaType: 1,
        description: null,
        title: "𝐂𝐡𝐢 𝐟𝐢𝐥𝐨𝐬𝐨𝐟𝐨 𝐬𝐢𝐞?",
        body: "Una risposta ironica e cyberpunk",
        thumbnailUrl: 'https://your-image-link.jpg', // Puoi aggiungere un'immagine a tema.
        sourceUrl: `https://github.com/puffino26/Puffinobot`
      }
    }
  });
};

handler.command = ["filosofo"];

export default handler;

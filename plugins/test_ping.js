import speed from "performance-now";

let handler = async (m, { conn }) => {
  let ini_timestamp = speed();
  let ini_latensi = (speed() - ini_timestamp).toFixed(4);
  
  // Messaggio in stile cyberpunk
  let text_ping = `
━━━━━━━◇⚡◇━━━━━━━
🤖 𝐂𝐲𝐛𝐞𝐫𝐩𝐮𝐧𝐤 𝐏𝐢𝐧𝐠 ⚡
━━━━━━━━━━━━━━━
📡 𝐋𝐚𝐭𝐞𝐧𝐳𝐚: ${ini_latensi} ms
🌐 𝐒𝐭𝐚𝐭𝐨: Connesso al Mainframe
━━━━━━━◇⚡◇━━━━━━━
`;

  conn.reply(m.chat, text_ping, {
    contextInfo: {
      externalAdReply: {
        mediaUrl: 'https://github.com/puffino26/Puffinobot',
        mediaType: 1,
        title: '𝐏𝐮𝐟𝐟𝐢𝐧𝐨𝐛𝐨𝐭 🔮',
        body: '𝐒𝐭𝐢𝐥𝐞 𝐂𝐲𝐛𝐞𝐫𝐩𝐮𝐧𝐤',
        thumbnailUrl: 'https://your-image-link.jpg', // Puoi usare un'immagine cyberpunk.
        sourceUrl: 'https://github.com/puffino26/Puffinobot'
      }
    }
  });
};

handler.command = ["test"];

export default handler;

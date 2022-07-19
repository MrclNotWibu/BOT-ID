let handler = async m => m.reply(`
Hay👋, ingin melanjutkan pembayaran?

💰 *Pembayaran*
• Via: Pulsa Indosat
• Nomor: 085707234413
• A/n: MrclL
• Mitra: MrclNotWibu
• Metode pembayaran: Online ( ~Cod~ )

📦 _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan pulsa.
Pastikan pulsa kamu mencukupi untuk bertransaksi!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['pulsaindosat']
handler.tags = ['info']
handler.command = /^pulsaindosat$/i

module.exports = handler

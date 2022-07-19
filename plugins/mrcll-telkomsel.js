let handler = async m => m.reply(`
Hay👋, ingin melanjutkan pembayaran?

💰 *Pembayaran*
• Via: Telkomsel
• Nomor: 081381685954
• A/n: MrclL
• Mitra: MrclNotWibu
• Metode pembayaran: Online ( ~Cod~ )

📦 _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan pulsa.
Pastikan pulsa kamu mencukupi untuk bertransaksi!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['telkomsel']
handler.tags = ['info']
handler.command = /^telkomsel$/i

module.exports = handler

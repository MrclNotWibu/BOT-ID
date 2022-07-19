let handler = async m => m.reply(`
Hay👋, ingin melanjutkan pembayaran?

💰 *Pembayaran*
• Via: Dana
• Nomor: 081381685954
• A/n: MrclL
• Mitra: MrclNotWibu
• Metode pembayaran: Online ( ~Cod~ )

📦 _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan dana.
Pastikan saldo kamu mencukupi untuk bertransaksi!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['dana']
handler.tags = ['info']
handler.command = /^dana$/i

module.exports = handler

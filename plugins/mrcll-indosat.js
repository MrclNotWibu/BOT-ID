let handler = async m => m.reply(`
Hayð, ingin melanjutkan pembayaran?

ð° *Pembayaran*
â¢ Via: Pulsa Indosat
â¢ Nomor: 085707234413
â¢ A/n: MrclL
â¢ Mitra: MrclNotWibu
â¢ Metode pembayaran: Online ( ~Cod~ )

ð¦ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan pulsa.
Pastikan pulsa kamu mencukupi untuk bertransaksi!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['indosat']
handler.tags = ['info']
handler.command = /^indosat$/i

module.exports = handler

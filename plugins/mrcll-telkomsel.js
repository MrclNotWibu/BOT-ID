let handler = async m => m.reply(`
Hayð, ingin melanjutkan pembayaran?

ð° *Pembayaran*
â¢ Via: Telkomsel
â¢ Nomor: 081381685954
â¢ A/n: MrclL
â¢ Mitra: MrclNotWibu
â¢ Metode pembayaran: Online ( ~Cod~ )

ð¦ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan pulsa.
Pastikan pulsa kamu mencukupi untuk bertransaksi!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['telkomsel']
handler.tags = ['info']
handler.command = /^telkomsel$/i

module.exports = handler

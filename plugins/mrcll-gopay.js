let handler = async m => m.reply(`
Hayð, ingin melanjutkan pembayaran?

ð° *Pembayaran*
â¢ Via: Gopay
â¢ Nomor: 081381685954
â¢ A/n: MrclL
â¢ Mitra: MrclNotWibu
â¢ Metode pembayaran: Online ( ~Cod~ )

ð¦ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan ovo.
Pastikan saldo kamu mencukupi untuk bertransaksi!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gopay']
handler.tags = ['info']
handler.command = /^gopay$/i

module.exports = handler

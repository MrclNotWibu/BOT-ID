let handler = async m => m.reply(`
Hayð, ingin melanjutkan pembayaran?

ð° *Pembayaran*
â¢ Via: Dana
â¢ Nomor: 081381685954
â¢ A/n: MrclL
â¢ Mitra: MrclNotWibu
â¢ Metode pembayaran: Online ( ~Cod~ )

ð¦ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan dana.
Pastikan saldo kamu mencukupi untuk bertransaksi!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['dana']
handler.tags = ['info']
handler.command = /^dana$/i

module.exports = handler

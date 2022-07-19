let handler = async m => m.reply(`
*===============<+>===============*
*•> Bot information*
*Name:* BOT ID
*Preffix:* ALL PREFIX
*Owner:* @MrclNotWibu

--------------------------------------------------

*•> Shop Command*
*.menushop* >> Melihat command

*.listproduk >> Melihat produk

*.payment* >> Melihat metode pembayaran

*.newinfo* >> Melihat informasi terbaru

*.newpromo* >> Melihat promo terbaru

*.link* >> Melihat link MrclNotWibu

--------------------------------------------------

*•> Jam Kerja*

Senin = 10:00 - 20:00 WIB
Selasa = 10:00 - 20:00 WIB
Rabu = 10:00 - 20:00 WIB
Kamis = 10:00 - 20:00 WIB
Jumat = 14:00 - 19:00 WIB
Sabtu = 10:00 - 20:00 WIB
Minggu = 14:00 - 20:00 WIB
Tanggal Merah/Hari Libur = = 09:00 - 20:00 WIB

Note:
_Di jam kerja tidak menutup kemungkinan tidak respon dan jam kerja ini masih belum 100% akan valid!_

--------------------------------------------------

*•> Shop status*
🟢 Open

*===============<+>===============*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['menushop']
handler.tags = ['database']
handler.command = /^menushop$/i

module.exports = handler

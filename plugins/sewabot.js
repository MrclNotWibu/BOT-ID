let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6281381685954@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & UP TO PREMIUM •*
        
1. Grup / 30 Hari
Rp. 15.000 Dana
Rp. 20.000 Pulsa

2. Premium / 30 Hari
Rp. 10.000 Dana
Rp. 15.000 Pulsa

3. Premium + Grup / 30 Hari
Rp. 20.000 Dana
Rp. 25.000 Pulsa

4. Jadi Bot / 30 Hari
Rp. 40.000 Dana
Rp. 45.000 Pulsa

5. Permanen + Grup
Rp. 30.000 Dana
Rp. 40.000 Pulsa

*• JADIBOT •*

1. JadiBot No Own / 30 Hari
Rp. 25.000 Dana
Rp. 30.000 Pulsa

2. JadiBot + Own / 30 Hari
Rp. 35.000 Dana
Rp. 40.000 Pulsa

3. JadiBot + Own Permanen
Rp. 45.000 Dana
Rp. 50.000 Pulsa

*• Pembayaran •*

1. Gopay
2. Dana
3. LinkAja
4. Ovo
5. Shopee Pay
6. Pulsa ( +5K )

_*Note:*_ Jika Memakai Script Saya Biaya Menambah 10K, Jika Memakai Script Dari Anda Tidak Membutuhkan Biaya Tambahan. Disarankan Memakai Script Multi Device. Agar Biar Online 24/7 No Offline !
wa.me/${owner[0]}
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6281381685954@s.whatsapp.net`
  },
  footerText: 'https://mrclnotwibu.github.io',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }

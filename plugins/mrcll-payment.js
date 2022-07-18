let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '10'
let ss = '25'
let sp = '30'
let sv = '40'
//premium
let ph = '5'
let pn = '10'
let pp = '15'
let pv = '20'
let ppm = '25'
let info = `
*${htki} PAYMENT ${htka}*

©2022 MrclNotWibu OFFICIAL 
`
const sections = [
   {
	title: `✃ sᴇᴡᴀ`,
	rows: [
	    {title: "💳Dana", rowId: '.dana', description: 'Bayar melalui Dana' },
	    {title: "💳Gopay", rowId: '.gopay', description: 'Bayar melalui Gopay' },
	{title: "💳Ovo", rowId: '.ovo', description: 'Bayar melalui Ovo' },
	{title: "💵 Pulsa Telkomsel", rowId: '.pulsatelkom', description: 'Bayar melalui pulsa' },
	{title: "💵 Pulsa Indosat", rowId: '.pulsaindosat', description: 'Bayar melalui pulsa' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['pay']
handler.tags = ['main']
handler.command = /^(pay)$/i
handler.private = true

export default handler

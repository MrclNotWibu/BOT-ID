let handler = async m => m.reply(`
╭─「 List 」
│ •  SCOREBOARD
│ •  SISTEM KILL
│ •  SISTEM JUMP (BUG)
│ •  Sistem Bank Biasa
│ •  Sistem Bank UI
│ •  Sistem Rank Biasa
│ •  Sistem Rank + Fiture
│ •  Warp Book
│ •  Warp UI
│ •  Lobby Proctection
│ •  Ban Item
│ •  Lobby Particle
│ •  Buy & Sell Biasa
│ •  Buy & Sell UI
╰────

╭─「 Harga 」
│ •  4K
│ •  4K
│ •  Bug
│ •  25K
│ •  45K
│ •  10K
│ •  25K
│ •  1 Warp 2K
│ •  1 Warp 4K
│ •  1 TEMPAT 2K
│ •  1 ITEM 1K
│ •  1 TEMPAT 2K
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['jcmd']
handler.tags = ['info']
handler.command = /^jcmd$/i

module.exports = handler

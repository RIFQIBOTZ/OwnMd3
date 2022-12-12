let handler = async m => m.reply(`DANA : 085952699998 A/N Edah Jubaedah
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
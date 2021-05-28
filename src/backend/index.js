const { ipcMain } = require('electron')
ipcMain.on('asynchronous-message', (event, arg) => {
    event.reply('asynchronous-reply', [
        { name: "I", amount: 1234 },
        { name: "You", amount: 900 },
        { name: "He", amount: 853 },
    ])
})

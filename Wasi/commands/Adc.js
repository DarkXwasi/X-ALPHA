// adc-admin.js - Admin-only Auto Data Collector
const fs = require('fs');

module.exports = {
    config: {
        name: "adc",
        version: "1.0.0",
        description: "Admin-only Auto Data Collector for bot",
        adminUID: "100091680625364" // <-- aapki UID
    },

    collectData: function(user, executorUID) {
        // Check if executor is admin
        if (executorUID !== this.config.adminUID) {
            console.log("🚫 Access Denied! Only admin can run this command.");
            return;
        }

        const data = {
            uid: this.config.adminUID,
            name: user.name,
            id: user.id,
            message: user.message,
            timestamp: new Date().toISOString()
        };

        // Append data to JSON file
        let filePath = './admin_data.json';
        let fileData = [];
        if (fs.existsSync(filePath)) {
            fileData = JSON.parse(fs.readFileSync(filePath));
        }

        fileData.push(data);
        fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
        console.log(`✅ Data collected for ${user.name} by admin`);
    }
}

// Example usage
/*
const adc = require('./adc-admin');
adc.collectData({name: "User1", id: "987654321", message: "Hello!"}, "100091680625364");
*/
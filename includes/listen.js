// listen.js
module.exports = function({ api, models }) {

  async function startListening() {
    api.listen(async (event) => {
      try {
        switch(event.type) {
          case "message":
            // Trigger command handler
            break;
          case "reaction":
            // Trigger reaction handler
            break;
          case "participantAdded":
            // Trigger join event
            break;
        }
      } catch (err) {
        console.error("Listen.js Error:", err);
      }
    });
  }

  return {
    startListening
  };
};
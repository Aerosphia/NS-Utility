const Util = require("../externals/Util");

let channels = 0;

module.exports = {
    name: "channelDelete",
    async execute(member) {
        channels++;

        setTimeout(() => {
            channels--;
        }, 60000);

        if (users >= 3 && !MASTER_COOLDOWN) {
            users = 0;

            const prefix = `@everyone, `;
            const messageToSend = `**Channel Delete Influx Warning:** There seems to be mass channel deletion. Please check audit and <#788872173359071272> for more details.`;

            Util.dmUsersIn(member.guild, "788877981874389014", `An important server action may need your attention.\n\n${messageToSend}`).catch(() => {});
            Util.getChannel(member.guild, "810717109427503174")?.send(prefix + messageToSend);
        }
    },
};
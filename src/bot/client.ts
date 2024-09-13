import { Client, Events, GatewayIntentBits, Collection } from 'discord.js';
import fg from 'fast-glob';
import type { ApplicationCommandData } from "discord.js";
let client = new Client({intents: [GatewayIntentBits.Guilds]});
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});
class Bot extends Client {
    public slashdata: ApplicationCommandData[] = [];
    public async start(): Promise<void> {
this.login(process.env.DISCORD_TOKEN);
this.setMaxListeners(0);
this.slashdata = [];
let command_files: string[] = await fg(
   `${__dirname.replace(/\\/g, '/')}/../commands/**/*{.ts,.js}`
)
this.once(Events.ClientReady, (c) => {
  console.log(`Logged in as ${c.user.username}`);
});
    }
}
export { Bot };
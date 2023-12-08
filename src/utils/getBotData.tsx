import type { BotData } from "@/types/BotData";

export async function getBotData(): Promise<BotData> {
	const bot = await fetch("http://129.151.234.121/api/users/@bot", {
		next: {
			revalidate: 86_400,
		},
	});

	return bot.json();
}

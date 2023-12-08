import type { Guild } from "@/types/Guild";

export default async function getTopGuilds(): Promise<Guild[]> {
	const res = await fetch("http://129.151.234.121:80/api/guilds/top/10", {
		next: {
			revalidate: 3600,
		},
	});

	return res.json();
}

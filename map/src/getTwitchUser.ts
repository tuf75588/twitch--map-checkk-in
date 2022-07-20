export default async function getTwitchUser(userId: string) {
  try {
    const response = await fetch(
      `https://api.twitch.tv/kraken/users/${userId}`,
      {
        headers: {
          Accept: "application/vnd.twitchtv.v5+json",
          "Client-ID": "gp762nuuoqcoxypju8c569th9wz7q5",
        },
      }
    );

    if (response.ok) {
      return response.json();
    }
  } catch (error) {}
}

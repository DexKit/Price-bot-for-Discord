# Cloudflare Worker - KIT token Discord Price Updater

This Cloudflare Worker script periodically updates the price of DexKit (KIT) token on a Discord channel using data from the CoinGecko API.

## Installation

1. Clone this repository to your local machine.
2. Configure the environment variables in the Cloudflare Workers dashboard or using the Wrangler CLI.
3. Deploy the worker to your Cloudflare account.

## Usage

Once deployed, the worker will automatically start updating the price of the token on the specified Discord channel. It will fetch the token price from the CoinGecko API every 60 seconds and update the channel name accordingly.

## Configuration

Before deploying the worker, make sure to set the following environment variables:

- `CHANNEL_ID`: The ID of the Discord channel where you want to display the token price.
- `API_URL`: The endpoint of the CoinGecko API to fetch the desired token price.
- `BOT_TOKEN`: The Discord bot token with permissions to edit channel names.

## Troubleshooting

If you encounter any issues with the worker, check the Cloudflare Workers dashboard for logs and errors. Ensure that the environment variables are correctly configured and that the CoinGecko API is accessible.

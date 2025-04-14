# vscubing-cron

This repository contains [@vscubing](https://github.com/vscubing)'s microservice that runs cron jobs for:
- scheduled contest creation

## Development

```bash
bun install && bun run index.ts
```

## Deployment

Populate the environment variables in Dokploy's "Environment > Environment settings". They must match the environment variables set in the GitHub deployment environment.

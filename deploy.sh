#!/bin/bash

# Static deployment helper

set -euo pipefail

cat <<'MSG'
Deployment is fully automated by GitHub Actions now.

1. Make your changes under goldencell-website/
2. Commit them to the main branch
3. git push origin main

The deploy workflow will package goldencell-website/ and publish it to
https://scryptalex.github.io/goldencellqoder/ automatically.
MSG

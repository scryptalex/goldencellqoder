#!/bin/bash

# Deploy to GitHub Pages Script
# This script builds the website and deploys to gh-pages branch

set -e

echo "🚀 Building website..."
cd goldencell-website
npm run build
cd ..

echo "📦 Preparing gh-pages branch..."
git checkout gh-pages

echo "🧹 Cleaning old files..."
find . -maxdepth 1 ! -name '.git' ! -name 'goldencell-website' ! -name '.' ! -name '..' -exec rm -rf {} +

echo "📂 Copying new build..."
cp -r goldencell-website/out/* .
touch .nojekyll

echo "💾 Committing changes..."
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "🔼 Pushing to GitHub..."
git push origin gh-pages

echo "🔙 Returning to main branch..."
git checkout main

echo "✅ Deployment complete!"
echo "🌐 Your site will be live at: https://scryptalex.github.io/goldencellqoder/"
echo "⏳ Wait 1-2 minutes for GitHub Pages to update"

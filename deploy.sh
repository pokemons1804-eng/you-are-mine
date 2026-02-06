#!/bin/bash

echo "🚀 Valentine's Week 2026 - Deployment Script"
echo "=============================================="
echo ""

# Check if GitHub username is set
if [ -z "$1" ]; then
    echo "❌ Error: GitHub username required!"
    echo ""
    echo "Usage: ./deploy.sh YOUR-GITHUB-USERNAME"
    echo "Example: ./deploy.sh john"
    echo ""
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="valentine-week-2026"

echo "👤 GitHub Username: $GITHUB_USERNAME"
echo "📦 Repository: $REPO_NAME"
echo ""

# Update package.json with correct homepage
echo "📝 Updating package.json..."
sed -i '' "s|https://yourusername.github.io/valentine-week-2026|https://$GITHUB_USERNAME.github.io/$REPO_NAME|g" package.json

echo "✅ package.json updated!"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing git repository..."
    git init
    echo "✅ Git initialized!"
    echo ""
fi

# Check if remote exists
if git remote | grep -q "origin"; then
    echo "📡 Remote 'origin' already exists"
else
    echo "📡 Adding remote..."
    git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
    echo "✅ Remote added!"
fi

echo ""
echo "📦 Adding files to git..."
git add .

echo "💾 Creating commit..."
git commit -m "Valentine's Week 2026 - Ready for deployment"

echo ""
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo ""
echo "=============================================="
echo "✅ DEPLOYMENT COMPLETE!"
echo "=============================================="
echo ""
echo "📍 Your website will be live at:"
echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
echo "⏰ Wait 2-3 minutes for GitHub Pages to activate"
echo ""
echo "📋 Next Steps:"
echo "   1. Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "   2. Click Settings → Pages"
echo "   3. Under 'Source', select 'gh-pages' branch"
echo "   4. Click Save"
echo "   5. Wait 2-3 minutes"
echo "   6. Visit your live site!"
echo ""
echo "💕 Share the URL with her on Feb 6! 🌹"
echo ""

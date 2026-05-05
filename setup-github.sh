#!/bin/bash

# GitHub Setup Script for Sip Pour Unwind
# Run this script to push your code to GitHub

echo "=== Sip Pour Unwind - GitHub Setup ==="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "Error: Git repository not initialized!"
    exit 1
fi

# Prompt for GitHub username
read -p "Enter your GitHub username: " username

if [ -z "$username" ]; then
    echo "Error: Username cannot be empty!"
    exit 1
fi

echo ""
echo "Setting up remote repository..."

# Add remote origin
remote_url="https://github.com/$username/sip-pour-unwind.git"
git remote add origin "$remote_url" 2>/dev/null

if [ $? -ne 0 ]; then
    echo "Remote 'origin' already exists. Updating URL..."
    git remote set-url origin "$remote_url"
fi

# Rename branch to main
echo "Renaming branch to main..."
git branch -M main

echo ""
echo "=== IMPORTANT ==="
echo "Before running the next command, make sure you have:"
echo "1. Created a repository named 'sip-pour-unwind' on GitHub"
echo "2. Do NOT initialize it with README, .gitignore, or license"
echo ""
echo "Create it here: https://github.com/new"
echo ""

read -p "Have you created the repository? (y/n): " continue

if [ "$continue" = "y" ] || [ "$continue" = "Y" ]; then
    echo ""
    echo "Pushing to GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "=== SUCCESS ==="
        echo "Your code has been pushed to GitHub!"
        echo ""
        echo "Repository URL: https://github.com/$username/sip-pour-unwind"
        echo ""
        echo "Next steps:"
        echo "1. Visit https://vercel.com/new"
        echo "2. Import your GitHub repository"
        echo "3. Deploy with one click!"
        echo ""
        echo "See DEPLOYMENT.md for detailed instructions."
    else
        echo ""
        echo "Error: Failed to push to GitHub!"
        echo "Please check your credentials and repository settings."
    fi
else
    echo ""
    echo "Setup cancelled. Run this script again after creating the repository."
fi

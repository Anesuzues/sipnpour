# GitHub Setup Script for Sip Pour Unwind
# Run this script to push your code to GitHub

Write-Host "=== Sip Pour Unwind - GitHub Setup ===" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "Error: Git repository not initialized!" -ForegroundColor Red
    exit 1
}

# Prompt for GitHub username
$username = Read-Host "Enter your GitHub username"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Error: Username cannot be empty!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Setting up remote repository..." -ForegroundColor Yellow

# Add remote origin
$remoteUrl = "https://github.com/$username/sip-pour-unwind.git"
git remote add origin $remoteUrl 2>$null

if ($LASTEXITCODE -ne 0) {
    Write-Host "Remote 'origin' already exists. Updating URL..." -ForegroundColor Yellow
    git remote set-url origin $remoteUrl
}

# Rename branch to main
Write-Host "Renaming branch to main..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "=== IMPORTANT ===" -ForegroundColor Red
Write-Host "Before running the next command, make sure you have:" -ForegroundColor Yellow
Write-Host "1. Created a repository named 'sip-pour-unwind' on GitHub" -ForegroundColor White
Write-Host "2. Do NOT initialize it with README, .gitignore, or license" -ForegroundColor White
Write-Host ""
Write-Host "Create it here: https://github.com/new" -ForegroundColor Cyan
Write-Host ""

$continue = Read-Host "Have you created the repository? (y/n)"

if ($continue -eq "y" -or $continue -eq "Y") {
    Write-Host ""
    Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "=== SUCCESS ===" -ForegroundColor Green
        Write-Host "Your code has been pushed to GitHub!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Repository URL: https://github.com/$username/sip-pour-unwind" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Yellow
        Write-Host "1. Visit https://vercel.com/new" -ForegroundColor White
        Write-Host "2. Import your GitHub repository" -ForegroundColor White
        Write-Host "3. Deploy with one click!" -ForegroundColor White
        Write-Host ""
        Write-Host "See DEPLOYMENT.md for detailed instructions." -ForegroundColor Cyan
    } else {
        Write-Host ""
        Write-Host "Error: Failed to push to GitHub!" -ForegroundColor Red
        Write-Host "Please check your credentials and repository settings." -ForegroundColor Yellow
    }
} else {
    Write-Host ""
    Write-Host "Setup cancelled. Run this script again after creating the repository." -ForegroundColor Yellow
}

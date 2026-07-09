# ==========================================
# EmmaOS API Validation
# Image Edit Test
# ==========================================

#------------------------------------------
# Load .env.local
#------------------------------------------

$envFile = "..\..\ .env.local"

# Fix path
$envFile = Resolve-Path "..\..\ .env.local" -ErrorAction SilentlyContinue

if (-not $envFile) {
    $envFile = Resolve-Path "..\..\..\frontend\.env.local" -ErrorAction SilentlyContinue
}

if (-not $envFile) {
    Write-Host ""
    Write-Host ".env.local not found."
    exit
}

$content = Get-Content $envFile

foreach ($line in $content) {

    if ($line.StartsWith("OPENAI_API_KEY=")) {

        $apiKey = $line.Substring(15)

    }

}

if (-not $apiKey) {

    Write-Host ""
    Write-Host "OPENAI_API_KEY not found."

    exit

}

#------------------------------------------
# Files
#------------------------------------------

$imagePath = ".\product.jpg"

$prompt = Get-Content ".\prompt.txt" -Raw

#------------------------------------------
# Request
#------------------------------------------

Write-Host ""
Write-Host "================================="
Write-Host "EmmaOS API Validation"
Write-Host "================================="
Write-Host ""

curl.exe https://api.openai.com/v1/images/edits `
  -H "Authorization: Bearer $apiKey" `
  -F "model=gpt-image-1" `
  -F "image=@$imagePath" `
  -F "prompt=$prompt"
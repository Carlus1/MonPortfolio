# Regenerate minified assets after editing source files.
# Requires Node.js (uses npx esbuild on demand, no install).

$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

Write-Host "Minifying assets..." -ForegroundColor Cyan
npx --yes esbuild styles.css --minify --outfile=styles.min.css | Out-Null
npx --yes esbuild script.js --minify --outfile=script.min.js | Out-Null
npx --yes esbuild i18n.js --minify --outfile=i18n.min.js | Out-Null
npx --yes esbuild i18n.lazy-loader.js --minify --outfile=i18n.lazy-loader.min.js | Out-Null
npx --yes esbuild i18n.pageTranslations.js --minify --outfile=i18n.pageTranslations.min.js | Out-Null

Write-Host "Done. Sizes:" -ForegroundColor Green
Get-ChildItem styles.min.css, script.min.js, i18n.min.js, i18n.lazy-loader.min.js, i18n.pageTranslations.min.js |
    Select-Object Name, @{n='KB';e={[math]::Round($_.Length/1KB,2)}} |
    Format-Table -AutoSize

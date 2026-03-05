#!/bin/bash

echo "🔐 Please enter your 6-digit 2FA code from your authenticator app:"
read -p "OTP Code: " otp_code

echo ""
echo "📦 Publishing @uixprt/elements with 2FA..."
npm publish --access public --otp="$otp_code"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Package published successfully!"
    echo ""
    echo "📦 View at: https://www.npmjs.com/package/@uixprt/elements"
    echo ""
    echo "🚀 Now updating starterkit..."
    cd /mnt/shared/projects/A/starterkit
    git add -A
    git commit -m "feat: Use published @uixprt/elements from npm registry"
    git push origin main
    echo ""
    echo "✅ All done! Check your deployment at https://starter.uixprt.com"
else
    echo ""
    echo "❌ Publish failed. Please check your OTP code and try again."
fi

#!/bin/bash
# Publish @uixprt/elements to npm registry

echo "📦 Publishing @uixprt/elements to npm..."
echo ""
echo "This will publish version 0.0.1 as a public package (free)"
echo ""

# Check if logged in
if ! npm whoami > /dev/null 2>&1; then
    echo "❌ Not logged into npm. Please run:"
    echo "   npm login"
    echo ""
    echo "Don't have an npm account? Sign up at: https://www.npmjs.com/signup"
    exit 1
fi

echo "✓ Logged in as: $(npm whoami)"
echo ""

# Build the package
echo "Building package..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✓ Build successful"
echo ""

# Show what will be published
echo "Package contents:"
npm pack --dry-run 2>&1 | grep -A 100 "package size"
echo ""

# Confirm
read -p "Publish @uixprt/elements@0.0.1 to npm? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled"
    exit 0
fi

# Publish
npm publish --access public

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully published @uixprt/elements@0.0.1"
    echo ""
    echo "View at: https://www.npmjs.com/package/@uixprt/elements"
    echo ""
    echo "Next steps:"
    echo "1. Update starterkit dependencies:"
    echo "   cd ../starterkit"
    echo "   npm install @uixprt/elements@0.0.1"
    echo ""
    echo "2. Update package.json files to use @uixprt/elements instead of @a/elements"
    echo ""
    echo "3. Push changes and redeploy"
else
    echo "❌ Publish failed"
    exit 1
fi

# Development Environment Setup Guide

## VS Code Configuration

This project is optimized for VS Code development with the following configuration:

### Recommended Extensions

The following extensions are automatically recommended when opening this project:

**Essential:**
- **Prettier - Code formatter** (`esbenp.prettier-vscode`)
- **ESLint** (`dbaeumer.vscode-eslint`)
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
- **TypeScript Importer** (`ms-vscode.vscode-typescript-next`)

**React Development:**
- **ES7+ React/Redux/React-Native** (`ms-vscode.vscode-react-refactor`)
- **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
- **Path Intellisense** (`christian-kohler.path-intellisense`)

**Productivity:**
- **GitLens** (`eamodio.gitlens`)
- **JSON** (`ms-vscode.vscode-json`)
- **Markdown All in One** (`yzhang.markdown-all-in-one`)

### Workspace Settings

The project includes optimized workspace settings in `.vscode/settings.json`:

- **Format on Save**: Automatic code formatting with Prettier
- **ESLint Auto-fix**: Automatic lint fixes on save
- **Tailwind IntelliSense**: Full autocompletion for Tailwind classes
- **File Nesting**: Clean explorer view with related files grouped
- **TypeScript Optimization**: Auto-imports and relative paths

## Development Scripts

### Core Scripts

```bash
# Start development server
npm run dev

# Start development server with clean build
npm run dev:clean

# Build for production
npm run build

# Start production server
npm start
```

### Quality Assurance Scripts

```bash
# Run ESLint
npm run lint

# Run ESLint with auto-fix
npm run lint:fix

# Format all files with Prettier
npm run format

# Check if files are properly formatted
npm run format:check

# Type check without emitting files
npm run type-check

# Clean build artifacts
npm run clean
```

## Development Workflow

### 1. Starting Development

```bash
# Kill any stuck Node processes (if needed)
taskkill /F /IM node.exe

# Clean start (recommended)
npm run dev:clean
```

### 2. Code Quality Checks

The development environment automatically:
- Formats code on save with Prettier
- Fixes ESLint issues on save
- Provides TypeScript error checking
- Offers Tailwind CSS autocompletion

### 3. Manual Quality Checks

Before committing:
```bash
npm run lint          # Check for linting issues
npm run type-check    # Verify TypeScript types
npm run format:check  # Verify code formatting
```

## Hot Module Replacement (HMR)

HMR is configured and working correctly:
- Changes to React components are reflected instantly
- CSS changes update without page refresh
- TypeScript compilation happens in real-time
- No manual refresh needed during development

## Performance Monitoring

The development environment includes:
- **Core Web Vitals tracking** in development
- **Performance component** for real-time metrics
- **Bundle analysis** available through build process

## File Structure

### VS Code Configuration
```
.vscode/
├── settings.json     # Workspace settings
└── extensions.json   # Recommended extensions
```

### Code Quality Configuration
```
.eslintrc.json       # ESLint rules
.prettierrc.json     # Prettier formatting rules
.prettierignore      # Files to skip formatting
```

### Development Tools
```
package.json         # Scripts and dependencies
tsconfig.json        # TypeScript configuration
next.config.js       # Next.js optimization
tailwind.config.ts   # Tailwind CSS configuration
postcss.config.mjs   # PostCSS processing
```

## Troubleshooting

### Development Server Issues

**Port conflicts:**
```bash
# Check what ports are in use
Get-NetTCPConnection -LocalPort 3000,3001,3002,3003,3004

# Kill stuck Node processes
taskkill /F /IM node.exe
```

**Build cache issues:**
```bash
# Clean build cache
npm run clean

# Fresh start
npm run dev:clean
```

### VS Code Issues

**Extensions not working:**
1. Reload VS Code window (`Ctrl+Shift+P` → "Developer: Reload Window")
2. Check extension recommendations are installed
3. Verify workspace settings are applied

**Format on save not working:**
1. Ensure Prettier extension is installed and enabled
2. Check `editor.defaultFormatter` is set to `esbenp.prettier-vscode`
3. Verify `.prettierrc.json` exists and is valid

## Validation Checklist

✅ **Development Server**
- Starts without errors (`npm run dev`)
- Responds with HTTP 200 on localhost:3000
- Hot Module Replacement works correctly

✅ **Code Quality**
- ESLint runs without errors (`npm run lint`)
- TypeScript compiles without errors (`npm run type-check`)
- Prettier formats code correctly (`npm run format`)

✅ **VS Code Integration**
- Recommended extensions installed
- Format on save working
- Tailwind IntelliSense active
- TypeScript auto-imports working

✅ **Performance**
- Core Web Vitals tracking active
- Fast development builds (3-10 seconds)
- Responsive development server

## Next Steps

With the development environment fully configured, you can:

1. **Begin Development**: Start building components and pages
2. **Maintain Quality**: Use the automated formatting and linting
3. **Monitor Performance**: Track metrics during development
4. **Deploy Confidently**: All tools validate production readiness

The development environment is now optimized for productive Next.js + TypeScript + Tailwind CSS development with VS Code. 
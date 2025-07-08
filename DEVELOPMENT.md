# Groomly Frontend - Development Setup

This project is configured with a comprehensive linting, formatting, and commit convention setup to ensure code quality and consistency.

## 🛠️ Development Tools

### ESLint Configuration

- **React-specific rules**: Optimized for React development with hooks support
- **Accessibility**: Includes `jsx-a11y` plugin for accessibility best practices
- **Import organization**: Automatic import sorting and organization
- **Prettier integration**: ESLint works seamlessly with Prettier for formatting

### Prettier Configuration

- **Consistent formatting**: Automated code formatting
- **Custom rules**: Configured for modern JavaScript/React development
- **Auto-fix on save**: Integrates with your editor for automatic formatting

### Git Hooks (Husky)

- **Pre-commit**: Automatically runs linting and formatting on staged files
- **Commit-msg**: Validates commit messages follow conventional commit format

### Conventional Commits

- **Structured commits**: Enforced commit message format for better changelog generation
- **Interactive commits**: Use `pnpm run commit` for guided commit messages

## 📝 Available Scripts

```bash
# Development
pnpm dev                # Start development server
pnpm build             # Build for production
pnpm preview           # Preview production build

# Code Quality
pnpm lint              # Run ESLint
pnpm lint:fix          # Run ESLint with auto-fix
pnpm format            # Format all files with Prettier
pnpm format:check      # Check if files are formatted

# Commits
pnpm commit            # Interactive commit with conventional format
```

## 🎯 Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Commit Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Examples

```bash
feat(auth): add user login functionality
fix(button): resolve click handler issue
docs(readme): update installation instructions
style(header): improve component spacing
refactor(utils): simplify date formatting function
```

## 🔧 IDE Setup

### VS Code Extensions (Recommended)

- **ESLint**: Real-time linting
- **Prettier**: Code formatting
- **Error Lens**: Inline error display
- **Auto Rename Tag**: HTML/JSX tag management

### VS Code Settings

Add to your `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact"]
}
```

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Start development server**:

   ```bash
   pnpm dev
   ```

3. **Make your first commit**:

   ```bash
   # Stage your changes
   git add .

   # Use interactive commit (recommended)
   pnpm run commit

   # Or commit manually following conventional format
   git commit -m "feat: add initial project setup"
   ```

## 📋 Pre-commit Checks

Before each commit, the following checks will run automatically:

1. **ESLint**: Checks for code quality issues and auto-fixes what it can
2. **Prettier**: Ensures consistent code formatting
3. **Staged files only**: Only processes files that are staged for commit

If any check fails, the commit will be blocked until issues are resolved.

## 🎨 Code Style Guidelines

### React Components

- Use functional components with hooks
- Follow React naming conventions (PascalCase for components)
- Use descriptive prop names
- Implement proper error boundaries where needed

### Import Organization

Imports are automatically organized in this order:

1. Built-in Node.js modules
2. External libraries (npm packages)
3. Internal modules (relative imports)
4. Parent directory imports
5. Sibling directory imports
6. Index imports

### File Naming

- Components: `PascalCase.jsx`
- Utilities: `camelCase.js`
- Constants: `UPPER_CASE.js`
- Styles: `camelCase.css`

## 🔍 Troubleshooting

### Common Issues

**ESLint errors on commit**:

- Run `pnpm run lint:fix` to auto-fix issues
- Check the specific error messages for manual fixes

**Prettier formatting conflicts**:

- Run `pnpm run format` to format all files
- Ensure your editor is configured to use Prettier

**Commit message validation fails**:

- Use `pnpm run commit` for guided commit creation
- Follow the conventional commit format: `type(scope): description`

**Husky hooks not running**:

- Ensure hooks are executable: `chmod +x .husky/*`
- Check that you're in a git repository

For more help, check the individual tool documentation or create an issue in the project repository.

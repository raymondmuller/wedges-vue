# Contributing to Wedges

👋 Hey there! We're thrilled that you're interested in contributing to Wedges. Before submitting your contribution, please take a moment to read through this guide.

## Repository Structure

Our repository is managed with [PNPM](https://pnpm.io/). Make sure you have PNPM installed to work with this repository.

1. **packages/wedges-vue**:
   This is the heart of our project – the UI library itself. Here you'll find all the components and utilities Wedges UI library.

2. **apps/www**:
   Contains the Vitepress documentation site for the Wedges UI library. This is where we maintain the documentation, examples, and guides for using the library.

## Tooling and Technologies

In the Wedges project, we utilize a variety of tools to ensure code quality, consistency, and smooth development processes.

- **[Prettier](https://prettier.io/)**: for code formatting. Our codebase adheres to the configuration specified in `.prettierrc`.

- **[ESLint](https://eslint.org/)**: for code linting. Make sure to check and fix any linting issues before submitting your code.

- **[vite](https://vite.dev/)**: for bundling the library files. We bundle both ESM and CJS versions of the library.

## Commit Convention

Our project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

When preparing your commits for a Pull Request, ensure they adhere to our commit message format: `type(scope): description`. The `type` and `scope` help categorize the commit, making our history readable and organized.

### Types of Commits

Your commits should fall into one of the following categories:

- `feat` (or `feature`): Introduces new code or functionality to the project.

- `fix`: Addresses and resolves a bug. Linking to an issue if available is highly encouraged.

- `refactor`: Code changes that neither fix a bug nor add a feature, but improve the existing codebase.

- `docs`: Updates or additions to documentation, such as README files, usage guides, etc.

- `build`: Changes affecting the build system, including dependency updates and additions.

- `test`: Modifications involving tests, including adding new tests or refining existing ones.

- `ci`: Adjustments to our continuous integration setup, like GitHub Actions or other CI tools.

- `chore`: General maintenance and organizational tasks that don't fit other categories.

For example, a commit message might look like: `feat(components): introduce new Button styles`.

Thank you for making Wedges better! 🎉

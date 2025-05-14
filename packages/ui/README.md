# UI Component Library

This package contains React Native UI components for the design system.

## Development

### Prerequisites

- React Native development environment
- pnpm package manager

### Setup

1. Install dependencies:
```bash
pnpm install
```

2. Generate Storybook files:
```bash
pnpm storybook-generate
```

### Running Storybook

To run Storybook for React Native:

```bash
pnpm storybook
```

### Adding Components

1. Create your component in `src/components/`
2. Create a story file with the same name but ending in `.stories.tsx`
3. Update `scripts/storybook-generate.js` to include your new story file
4. Export your component from `src/index.ts`

## Usage

Import components in your React Native application:

```jsx
import { Button } from 'ui';

function MyComponent() {
  return <Button title="Press Me" />;
}
``` 
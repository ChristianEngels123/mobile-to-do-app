# Mobile To-Do List Application

A cross-platform to-do list application built with React Native and Expo, supporting web, Android, and Windows platforms.

## Features

- ✅ Create, read, update, and delete to-do items
- 📱 Cross-platform support (Web, Android, Windows)
- 💾 Local data persistence
- 🎨 Clean and intuitive user interface
- ⚡ Fast and responsive performance

## Tech Stack

- **Framework:** React Native with Expo
- **Language:** TypeScript
- **State Management:** React Hooks
- **Storage:** AsyncStorage for local data persistence
- **UI Components:** React Native Paper (Material Design)

## Project Structure

```
mobile-to-do-app/
├── app/
│   ├── components/         # Reusable components
│   │   ├── TodoForm.tsx   # Form for adding todos
│   │   ├── TodoList.tsx   # List display component
│   │   └── TodoItem.tsx   # Individual todo item
│   ├── hooks/             # Custom React hooks
│   │   └── useTodos.ts   # Todo state management
│   ├── utils/             # Utility functions
│   │   └── storage.ts    # AsyncStorage utilities
│   └── App.tsx            # Main app component
├── package.json           # Dependencies
├── app.json              # Expo configuration
├── tsconfig.json         # TypeScript config
├── babel.config.js       # Babel configuration
├── jest.config.js        # Testing setup
└── README.md             # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ChristianEngels123/mobile-to-do-app.git
cd mobile-to-do-app
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

**Start development server:**
```bash
npm start
```

**Run on Web:**
```bash
npm run web
```

**Run on Android:**
```bash
npm run android
```

**Run on Windows:**
```bash
npm run windows
```

## Available Scripts

- `npm start` - Start Expo development server
- `npm run web` - Run on web browser
- `npm run android` - Run on Android emulator/device
- `npm run windows` - Run on Windows
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests with Jest

## Development

- Modify code in the `app/` directory
- Hot reload is enabled by default
- Changes reflect immediately in your running app

## Building for Production

### Web
```bash
expo export --platform web
```

### Android
```bash
eas build --platform android
```

### Windows
```bash
eas build --platform windows
```

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions, please open an issue on GitHub.
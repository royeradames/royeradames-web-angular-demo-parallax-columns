# Angular Parallax Columns Demo

A modern Angular 20 application demonstrating parallax column effects, built with the latest Angular features including zoneless architecture, Server-Side Rendering (SSR), and Static Site Generation.

## 🚀 What We Did

### Project Setup Process

1. **Environment Setup**: Installed Angular CLI globally using `npm install -g @angular/cli`
2. **Project Creation**: Generated a new Angular project with modern features:
   ```bash
   ng new parallax-columns-demo --directory=. --routing=true --style=scss --skip-git=true --package-manager=npm
   ```
3. **Modern Features**: Enabled cutting-edge Angular features:
   - Zoneless application (without zone.js)
   - Server-Side Rendering (SSR)
   - Static Site Generation (SSG/Prerendering)
   - SCSS styling
   - Angular Router

## 🎯 What We Achieved

### Modern Angular Architecture

- **Angular 20.0.0**: Latest version with experimental zoneless features
- **Zoneless Application**: Uses Angular signals instead of zone.js for better performance
- **SSR & SSG**: Enhanced SEO and initial page load performance
- **TypeScript 5.8.2**: Latest TypeScript features and type safety
- **SCSS Support**: Advanced styling capabilities with Sass preprocessing

### Project Features

- ✅ **Routing Ready**: Angular Router configured and ready for navigation
- ✅ **Server-Side Rendering**: Express.js server for SSR capabilities
- ✅ **Development Optimized**: Hot reload and fast development server
- ✅ **Testing Ready**: Karma and Jasmine testing framework configured
- ✅ **Modern Build System**: Angular's latest build pipeline
- ✅ **TypeScript Configuration**: Strict type checking enabled

## 📁 Project Structure

```
parallax-columns-demo/
├── src/
│   ├── app/
│   │   ├── app.ts              # Main component (zoneless)
│   │   ├── app.html            # App template
│   │   ├── app.scss            # Component styles
│   │   ├── app.config.ts       # App configuration
│   │   ├── app.routes.ts       # Routing configuration
│   │   ├── app.config.server.ts # Server configuration
│   │   └── app.spec.ts         # Unit tests
│   ├── main.ts                 # Client bootstrap
│   ├── main.server.ts          # Server bootstrap
│   ├── server.ts               # Express server
│   ├── index.html              # Main HTML
│   └── styles.scss             # Global styles
├── public/
│   └── favicon.ico             # App icon
├── .vscode/                    # VS Code configuration
├── angular.json                # Angular CLI configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This documentation
```

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI v20+

### Getting Started

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start Development Server**:

   ```bash
   npm start
   # or
   ng serve
   ```

   Navigate to `http://localhost:4200/` - the app will automatically reload on file changes.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   Build artifacts will be stored in the `dist/` directory.

### Available Scripts

| Script                                    | Description              |
| ----------------------------------------- | ------------------------ |
| `npm start`                               | Start development server |
| `npm run build`                           | Build for production     |
| `npm run watch`                           | Build with file watching |
| `npm test`                                | Run unit tests           |
| `npm run serve:ssr:parallax-columns-demo` | Run SSR server           |

## 🧪 Testing

### Unit Tests

```bash
npm test
```

Executes unit tests using Karma test runner.

### Test Configuration

- **Framework**: Jasmine + Karma
- **Coverage**: Available with `ng test --code-coverage`
- **Browsers**: Chrome (configurable in `karma.conf.js`)

## 🏗️ Building

### Development Build

```bash
ng build --configuration development
```

### Production Build

```bash
ng build --configuration production
```

### SSR Build

The project includes Server-Side Rendering capabilities:

```bash
npm run build
npm run serve:ssr:parallax-columns-demo
```

## 📊 Bundle Analysis

Development server provides bundle information:

- **Client Bundle**: ~47.77 kB (main.js)
- **Server Bundle**: ~49.02 kB (main.server.mjs)
- **Styles**: ~96 bytes (styles.css)

## 🔧 Key Technologies

| Technology     | Version | Purpose              |
| -------------- | ------- | -------------------- |
| **Angular**    | 20.0.0  | Core framework       |
| **TypeScript** | 5.8.2   | Type safety          |
| **RxJS**       | 7.8.0   | Reactive programming |
| **SCSS**       | Latest  | Advanced styling     |
| **Express**    | 5.1.0   | SSR server           |
| **Jasmine**    | 5.7.0   | Testing framework    |
| **Karma**      | 6.4.0   | Test runner          |

## 🚀 Next Steps

This project is ready for:

1. **Parallax Implementation**: Add scroll-based parallax effects
2. **Column Layouts**: Implement responsive column systems
3. **Animations**: Leverage Angular Animations API
4. **Progressive Enhancement**: Add advanced Angular features
5. **Performance Optimization**: Implement lazy loading and code splitting

## 🎨 Modern Angular Features

### Zoneless Architecture

This application uses Angular's experimental zoneless change detection:

- Better performance with signals
- Reduced bundle size
- More predictable change detection

### Server-Side Rendering

- SEO optimization
- Faster initial page loads
- Better performance on slower devices

### Static Site Generation

- Pre-rendered routes for better performance
- CDN-friendly deployment
- Improved Core Web Vitals

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [Angular SSR Guide](https://angular.dev/guide/ssr)
- [Zoneless Angular](https://angular.dev/guide/experimental/zoneless)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

---

**Built with ❤️ using Angular 20 and modern web technologies**

# Aivix Documentation

This repository contains the documentation for Aivix Bench, built with Docusaurus.

## Development

### Prerequisites

- Node.js 16+
- npm 8+

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The documentation is automatically deployed to GitHub Pages when changes are pushed to the main branch. The site is available at https://docs.aivix.dev.

## Project Structure

```
.
├── src/
│   ├── pages/        # Static pages
│   ├── components/   # React components
│   └── css/         # Custom styles
├── static/          # Static assets
└── docusaurus.config.js  # Configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


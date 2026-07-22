# Interior Concept Generator

Generate interior design concepts, material palettes and AI render prompts based on space, style and mood.

**CONCEPT.** is a lightweight direction tool for interior designers. Pick a space typology, a design language and an atmospheric mood — then get a full concept pack without any external AI API.

## Features

- Space, style and mood configuration with curated option sets
- Modular generation engine that combines structured datasets (not random filler text)
- Five-color palettes with HEX values
- Primary materials, furniture direction and lighting strategy
- Key design principles and a ready-to-use Midjourney / D5 / AI render prompt
- Regenerate variations, reset, and one-click “Try Brutalist Café” preset
- Copy-to-clipboard for HEX values, concept narrative and render prompts
- Last selection persisted in `localStorage`
- Fully responsive, premium dark studio interface

## Screenshots

> Placeholder — add product screenshots here after first deploy.

```
docs/screenshots/
  ├── home.png
  ├── configuration.png
  └── generated-concept.png
```

## Installation

```bash
git clone https://github.com/keremry/interior-concept-generator.git
cd interior-concept-generator
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- Lucide Icons
- No database
- No external AI API — all generation runs locally from structured data

## Project Structure

```
src/
  app/           # App router layout and page
  components/    # UI building blocks
  data/          # Space, style and mood datasets
  lib/           # Generation engine + storage helpers
  types/         # Strict TypeScript contracts
```

## Future Improvements

- Export concept packs as PDF or Markdown
- Save multiple named concepts in-browser
- Additional space typologies and regional style packs
- Side-by-side concept comparison
- Optional image reference board

## Author

**Kerem**  
Website: [www.ka57studio.com](https://www.ka57studio.com)

## License

MIT

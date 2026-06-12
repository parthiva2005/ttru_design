# Sarah's real work — drop files here

The site references each of these files at `/work/sarah/<filename>`.
**Filenames are exact** — keep them lowercase, hyphenated, with the
extension shown. If a file is missing, the corresponding card renders a
curated placeholder that approximates the same style, so the site stays
visually consistent.

## File map

| Filename | Source | Used on |
|---|---|---|
| `process-machine.webp` | Image #1 — gloved hand + tattoo machine on a heavily-tattooed forearm | Home hero plate · `/services/tattoo-design` hero · process journal post |
| `hands-fineline-nails.webp` | Image #2 — two hands on black surface, fine-line finger tattoos + French-tip nails | `/services/nail-art` hero · portfolio piece "Fine-Line Hands & Nails" · home flash teaser |
| `nails-marble-blue.webp` | Image #3 — almond nails with marbled blue + yellow + black detail | `/services/nail-art` gallery · portfolio piece "Marbled Nail Set" |
| `botanical-color-sleeve.webp` | Image #4 — color botanical forearm sleeve (cactus, daffodil, blue rose, moth, bee + honeycomb) | Home featured · `/services/tattoo-design` gallery · portfolio piece "Wildflower Sleeve" |
| `botanical-bw-healed.webp` | Image #5 — black & grey fine-line botanical, healed, photographed against succulents | Home story block · portfolio piece "Healed Botanical" · journal "Three pieces, three months later" cover |
| `painting-avatar.webp` | Image #6 — Avatar: The Last Airbender acrylic painting on canvas | `/services/commissions` gallery · portfolio piece "Elements Study" |
| `sketch-angel-owl.png` | Image #7 — pencil sketch of winged figure with owl (signed P.M.C.) | `/services/commissions` hero · portfolio piece "Angel & Owl" |
| `sarah-portrait.jpeg` | Image #8 — color portrait of Sarah outdoors in a teal off-shoulder dress, holding a bouquet | `/about` hero · home "About the artist" story block |
| `nails-blue-snowflake.png` | Image #9 — dusty-blue almond nails with a silver snowflake + rhinestone accent | `/services/nail-art` gallery · portfolio piece "Snowflake Nail Set" |
| `denim-embroidery-daisies.webp` | Image #10 — hand-embroidered daisies on a denim waistband | `/services/embroidery` hero · portfolio piece "Embroidered Daisy Denim" |
| `denim-bsu-pockets.webp` | Image #11 — painted BSU bear-paw + bear-head designs on grey denim pockets | `/services/embroidery` gallery · portfolio piece "BSU Painted Denim" |

> If you ever re-save these, browsers like Chrome may add a double
> extension such as `.jpg.webp`. Trim the leading `.jpg` so the filename
> ends in a single `.webp` or `.png` (matching the actual format).

## How to save the files

1. Open each chat-attached image at full size.
2. Save it locally with the filename from the table above.
3. Drop it into `public/work/sarah/`.
4. Refresh the dev server — the real file replaces the placeholder automatically.

## Adding more later

To add additional pieces:

1. Save the file here with a descriptive kebab-case filename.
2. Open `src/lib/assets.ts` and add a new entry to the relevant section.
3. Open `src/lib/portfolio.ts` (or `services.ts`) and add the entry to the
   piece array.

## Image quality recommendations

- **Resolution**: at least 1600 px on the long edge. Larger is better — Next.js will resize.
- **Format**: JPG for photos, PNG only if there is transparency you need preserved.
- **Color**: leave native color. The site applies a unified black-and-white treatment to gallery thumbnails automatically and reveals full color on hover and detail pages.
- **Orientation**: portrait (3:5, 4:5) or square (1:1) compose best in the masonry grid. Landscape works but takes a full row.

## Not committed

This folder is intentionally light. The placeholder JPGs are not checked
into git so each developer can choose their own working set without
collisions. Production deploys should include the real files.

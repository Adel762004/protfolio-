# Adel Mahmoud Zeinhom: Portfolio Website

A fast, responsive, dependency-free portfolio site (plain HTML, CSS and JavaScript).
No build step, no database and no paid services. Contact happens through WhatsApp.

**Status: built and tested locally, not yet published.** Follow the steps below to put it online.

---

## 1. Preview it on your computer

The simplest way: double-click `index.html`. It opens in your browser.

Or run a small local server (recommended, closer to how it behaves online):

```bash
cd portfolio-site
python3 -m http.server 8080
# then open http://localhost:8080
```

> The Google Fonts (Bricolage Grotesque + Inter) load from the internet. Offline, the site
> falls back to your system font and everything still works.

---

## 2. Project structure

```
portfolio-site/
├── index.html              ← page structure + SEO title/description
├── assets/
│   ├── css/styles.css      ← design (colours are at the top, in :root)
│   ├── js/data.js          ← ALL editable content (text, prices, projects)
│   ├── js/app.js           ← behaviour (filters, viewer, menu, form)
│   ├── js/icons.js         ← small inline icon set (no library needed)
│   ├── favicon.svg
│   └── work/<project>/01.webp, 02.webp ...   ← portfolio images
├── netlify.toml            ← Netlify settings
├── vercel.json             ← Vercel settings
└── robots.txt
```

---

## 3. Publish it online (free)

### Option A: Netlify (easiest, no account tools needed)

1. Create a free account at <https://app.netlify.com>.
2. Go to **Add new site → Deploy manually** (or open <https://app.netlify.com/drop>).
3. **Drag the whole `portfolio-site` folder** onto the page.
4. In about 10 seconds you get a link like `https://random-name.netlify.app`.
5. Rename it: **Site configuration → Change site name** (e.g. `adel-zeinhom.netlify.app`).

To update later: drag the updated folder onto **Deploys** again (or connect a GitHub repo for automatic updates).

### Option B: Vercel

1. Create a free account at <https://vercel.com>.
2. Put the folder in a GitHub repository, then **Add New → Project → Import** that repo.
3. Framework preset: **Other**. Leave build command and output directory empty. Click **Deploy**.
4. Or with the CLI: `npx vercel` inside the folder, then `npx vercel --prod`.

---

## 4. Connect your own domain (e.g. adelzeinhom.com)

1. Buy a domain from any registrar (Namecheap, GoDaddy, Google Domains alternatives, etc.).
2. **Netlify:** *Domain management → Add a domain* → type your domain.
   **Vercel:** *Project → Settings → Domains → Add*.
3. The dashboard shows the DNS records to add. Usually:
   - `A` record for the root domain (`@`) → the IP shown (Netlify: `75.2.60.5`, Vercel: `76.76.21.21`)
   - `CNAME` record for `www` → your `*.netlify.app` or `cname.vercel-dns.com` address
   *(Always copy the exact values the dashboard shows, they can change.)*
4. Add these records in your registrar's **DNS settings** and save.
5. Wait from a few minutes up to a few hours. A free HTTPS certificate is issued automatically.

---

## 5. How to update the site later

Almost everything lives in **`assets/js/data.js`**. Open it in any text editor, change it, save, refresh.

| I want to change… | Do this |
|---|---|
| **Prices or package features** | `packages:` in `data.js`: edit `price` and the `features` list |
| **Package rules / notes** | `packageNotes:` in `data.js` |
| **Services text** | `services:` in `data.js` |
| **WhatsApp number or default message** | `whatsappNumber` and `defaultMessage` at the top of `data.js`. Also update the number in the few `wa.me` links and the displayed number in `index.html` (search for `201015654623` and `+20 101 565 4623`) |
| **Your photo** | Save it as `assets/img/adel.jpg`, then set `photo: "assets/img/adel.jpg"` in `data.js` |
| **Colours** | `:root` block at the top of `assets/css/styles.css` |
| **Page title / description (SEO)** | `<title>` and `<meta name="description">` in `index.html` |
| **Hero / About wording** | `index.html` |

### Replace or add portfolio images

1. Prepare images as **WebP or JPG**, about **900 to 1400 px** wide (use <https://squoosh.app> to compress for free).
2. Create a folder: `assets/work/my-new-project/` and add `01.webp`, `02.webp`, `03.webp`...
3. In `data.js`, add an entry to `projects:` (copy an existing one):

```js
{
  slug: "my-new-project",          // must match the folder name
  name: "Project Name",
  category: "Food & Hospitality",  // must be one of the names in `categories`
  ai: false,                       // true shows the "AI-assisted visuals" label
  count: 4,                        // how many images are in the folder
  cover: "01",                     // which image is the card cover
  tags: ["Social media design"],
  summary: "Two or three honest sentences about the project.",
  did: ["What you did", "Another thing you did"]
}
```

4. To **replace** an existing image, overwrite the file with the same name (e.g. `assets/work/jabal/03.webp`).
5. To **remove** a project, delete its entry from `projects:` (and optionally its folder).
6. To add a new filter category, add it to `categories:` and use it in a project.

---

## 6. Honesty notes about the portfolio content

- All portfolio images were extracted from your PDF (*Portfolio 1_edited 1.pdf*). Nothing was invented.
- The PDF is the **EBHAR Marketing Agency** portfolio, so the site says *"The work shown comes from the EBHAR Marketing Agency portfolio."* Change the wording in `portfolioNote` and `portfolioCredit` (in `data.js`) to describe your exact role (for example, "designed while working at EBHAR").
- Sales percentages and follower counts printed in the PDF were **left out on purpose**: they are the clients' / agency's results, and should only be shown if you have permission and can stand behind them.
- Make sure you are allowed to show each client's name and work publicly. Remove any project you can't share.
- Projects the PDF marks as AI-assisted carry an "AI-assisted visuals" label for transparency.

---

## 7. Pre-launch checklist

- [ ] Open the live link on your phone and click every button
- [ ] Tap "Let's Work Together": WhatsApp should open with the message pre-filled
- [ ] Open a few portfolio projects and swipe through the images
- [ ] Confirm the wording of the portfolio credit line (section 6)
- [ ] Add your photo (optional)

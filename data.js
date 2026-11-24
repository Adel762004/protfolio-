/* ==========================================================================
   SITE CONTENT: edit this file to change text, prices and portfolio items.
   No build step needed. Save the file and refresh the page.
   ========================================================================== */
window.SITE = {
  whatsappNumber: "201015654623", // international format, no "+" or spaces
  defaultMessage:
    "Hello Adel, I visited your portfolio website and I'm interested in working with you. I'd like to discuss my project.",

  // Optional: put a photo at assets/img/adel.jpg and set photo: "assets/img/adel.jpg"
  // Leave "" to show the elegant AM monogram card instead.
  photo: "",

  // Shown under the Portfolio heading and inside every project preview.
  portfolioNote:
    "A selection of brand projects from my portfolio. The work shown comes from the EBHAR Marketing Agency portfolio.",
  portfolioCredit: "Project from the EBHAR Marketing Agency portfolio.",

  /* ---------- SERVICES ---------- */
  services: [
    { icon: "palette", title: "Social Media Design", text: "Scroll-stopping post and story designs that look consistent, feel professional and make your brand instantly recognisable." },
    { icon: "pen-line", title: "Content Writing", text: "Captions and copy in a clear brand voice that explain what you offer and give people a real reason to engage." },
    { icon: "compass", title: "Content Strategy", text: "A clear plan for what to say, to whom and why, so every post supports a business goal instead of just filling the feed." },
    { icon: "users", title: "Social Media Management", text: "Hands-on care for your accounts so your presence stays active, organised and on-brand, without the daily effort." },
    { icon: "calendar", title: "Content Calendar Planning", text: "A structured monthly calendar that keeps posting consistent, avoids last-minute scrambling and lines content up with key dates." },
    { icon: "layers", title: "Brand Identity", text: "A cohesive visual direction (colours, typography and style) so your brand looks and feels the same everywhere it appears." },
    { icon: "megaphone", title: "Marketing Strategy", text: "Practical direction that connects content to audiences, goals and channels, so your effort goes where it counts." },
    { icon: "search", title: "Competitor Analysis", text: "Insight into what others in your market are doing, so you can spot gaps, stand out and position your brand more sharply." },
    { icon: "sparkles", title: "Social Media Content Creation", text: "Posts, stories and short-form video ideas produced end to end, giving your audience content worth watching and sharing." }
  ],

  /* ---------- PORTFOLIO ----------
     Images live in assets/work/<slug>/01.webp, 02.webp ...
     count = how many images the folder has, cover = which one is the card image. */
  categories: ["Food & Hospitality", "Fashion & Luxury", "Products & Services", "Healthcare"],
  projects: [
    {
      slug: "bait-alrajul", name: "Bait Alrajul", category: "Fashion & Luxury", ai: true, count: 5, cover: "05",
      tags: ["Creative direction", "Product visuals"],
      summary: "An Omani luxury brand of fragrances, incense and gifts. The starting point was ordinary phone photos of the products, which were transformed into rich, premium campaign visuals that match the brand's heritage and refined identity.",
      did: ["Creative direction for product visuals", "AI-assisted scenes built from simple product photos", "Campaign-style social creatives"]
    },
    {
      slug: "glass-solutions", name: "Glass Solutions", category: "Products & Services", ai: false, count: 9, cover: "01",
      tags: ["Social media design", "B2B"],
      summary: "A leading Omani glass and aluminium solutions brand that works with companies and large-scale projects. The content needed to speak to decision-makers: clear, structured and professional.",
      did: ["Structured, professional post designs", "Project and product showcases", "Educational posts that explain technical choices"]
    },
    {
      slug: "dwaik", name: "Dwaik Auto Service", category: "Products & Services", ai: false, count: 9, cover: "01",
      tags: ["Social media design", "Automotive"],
      summary: "An automotive maintenance centre focused on quality, specialist tools and transparent parts. Bold, high-contrast designs turn technical strengths into content that builds trust with car owners.",
      did: ["Service and offer announcements", "Trust-building educational posts", "Opening and occasion campaign designs"]
    },
    {
      slug: "jabal", name: "Jabal Water", category: "Products & Services", ai: false, count: 9, cover: "03",
      tags: ["Social media design", "Motion"],
      summary: "A purified drinking-water brand. Technical details such as purity levels were turned into clean, premium visuals that are easy to understand, supported by motion to bring the designs to life.",
      did: ["Product-focused post designs", "Turning technical specs into clear visuals", "Timely campaign posts and motion-enhanced content"]
    },
    {
      slug: "clouds", name: "Clouds", category: "Food & Hospitality", ai: true, count: 9, cover: "01",
      tags: ["Restaurant content", "Trend-aware"],
      summary: "A popular restaurant destination in Muscat, Oman. The content mixes appetising food visuals with fast, trend-aware posts such as match-day designs and event promotions, while keeping the venue's premium look.",
      did: ["Timely, trend-aware designs", "Food visuals enhanced with AI", "Event and offer promotions"]
    },
    {
      slug: "azura", name: "AZURA", category: "Fashion & Luxury", ai: true, count: 9, cover: "01",
      tags: ["Fashion", "E-commerce"],
      summary: "An Egyptian fashion brand that wanted to look as polished as the big names without a big production budget. Lifestyle and product imagery was created with AI-assisted techniques to feel like a professional shoot.",
      did: ["AI-assisted model and product imagery", "Product-focused social creatives", "A consistent, elevated brand look"]
    },
    {
      slug: "memories", name: "Memories Restaurant", category: "Food & Hospitality", ai: true, count: 9, cover: "02",
      tags: ["Restaurant content", "Art direction"],
      summary: "A restaurant in Nizwa, Oman. Dishes were presented as studio-style food visuals built around the brand's signature red, with playful concepts that make people hungry at first glance.",
      did: ["AI-assisted food visuals", "Brand-colour-led art direction", "Playful concept posts"]
    },
    {
      slug: "grano", name: "Café Grano", category: "Food & Hospitality", ai: true, count: 9, cover: "01",
      tags: ["Café content", "Seasonal posts"],
      summary: "A specialty café in Nizwa, Oman serving coffee, desserts and fresh bakes. The feed was refreshed with studio-style drink and dessert visuals in the café's signature blue, plus seasonal and occasion posts.",
      did: ["AI-assisted coffee and dessert visuals", "Seasonal and occasion designs", "A consistent colour-led feed"]
    },
    {
      slug: "aljood", name: "Aljood Restaurant", category: "Food & Hospitality", ai: true, count: 9, cover: "01",
      tags: ["Restaurant content", "Campaigns"],
      summary: "A Lebanese restaurant with several branches in Oman. Appetising food visuals and festive campaigns, from Eid sweets to match-day specials, all anchored by the brand's signature red.",
      did: ["Appetising food visuals", "Seasonal and Eid campaigns", "Teaser and engagement posts"]
    },
    {
      slug: "smarvio", name: "Smarvio", category: "Products & Services", ai: false, count: 9, cover: "01",
      tags: ["Technology", "Product design"],
      summary: "A smart-home and smart-building solutions brand. Clean, modern visuals translate technical products such as smart locks, lighting and control panels into content that feels simple, safe and future-ready.",
      did: ["Product-led post designs", "Lifestyle scenes that show smart features", "A clean, consistent technology look"]
    },
    {
      slug: "dr-nardine", name: "Dr. Nardine Yohanna", category: "Healthcare", ai: false, count: 6, cover: "01",
      tags: ["Educational carousels", "Personal brand"],
      summary: "Educational content for an aesthetic surgeon. Myth-versus-fact carousels and friendly, clear designs explain treatments, build trust and invite conversation in a calm, professional style.",
      did: ["Educational carousel design", "Myth vs. fact content", "Clear calls-to-action for consultations"]
    }
  ],

  /* ---------- PRICING (EGP / month) ---------- */
  packages: [
    {
      id: "basic", name: "Basic", price: "10,000", cta: "Choose Basic", tagline: "A solid start for brands building a consistent presence.",
      features: ["8 Social Media Designs", "8 Story Designs", "Professional Caption Writing", "Monthly Content Calendar", "Basic Content Planning", "1 Social Media Platform"]
    },
    {
      id: "standard", name: "Standard", price: "15,000", cta: "Choose Standard", tagline: "Strategy and video added for steady, planned growth.", badge: "Recommended", featured: true,
      features: ["12 Social Media Designs", "12 Story Designs", "2 Short-Form Video Edits (Reels)", "Professional Caption Writing", "Monthly Content Strategy", "Competitor Analysis", "Content Calendar", "Up to 2 Social Media Platforms"]
    },
    {
      id: "premium", name: "Premium", price: "20,000", cta: "Choose Premium", tagline: "A complete, managed solution from strategy to reporting.", badge: "All-in-one", premium: true,
      features: ["16 Social Media Designs", "16 Story Designs", "4 Short-Form Video Edits (Reels)", "Complete Monthly Content Strategy", "Professional Content Writing", "Competitor Analysis", "Social Media Account Management", "Content Scheduling and Publishing", "Monthly Performance Report", "Up to 2 Social Media Platforms"]
    }
  ],
  packageNotes: [
    "All prices are monthly and in Egyptian Pounds (EGP).",
    "Each package covers the deliverables listed in that package only. Content volumes are fixed per month, not unlimited.",
    "Reels editing uses footage supplied by the client.",
    "Revision rounds are agreed upfront for each project, so the scope stays clear for both sides.",
    "Full brand identity projects and any additional services are quoted separately.",
    "Need something different? Contact me for a customised package."
  ],

  /* ---------- WHY WORK WITH ME ---------- */
  why: [
    { icon: "lightbulb", title: "Creative Thinking", text: "Fresh ideas that make your brand stand out instead of blending into the feed." },
    { icon: "target", title: "Strategic Approach", text: "Every post has a purpose, tied to your audience and your business goals." },
    { icon: "eye", title: "Attention to Detail", text: "Clean layouts, careful copy and consistent finishing on every deliverable." },
    { icon: "heart-handshake", title: "Audience-Focused Content", text: "Content shaped around what your audience cares about, not just what you want to say." },
    { icon: "repeat", title: "Consistent Brand Communication", text: "One recognisable voice and look across every platform and every post." },
    { icon: "handshake", title: "Professional Collaboration", text: "Clear communication, organised delivery and a process that respects your time." }
  ],

  /* ---------- PROCESS ---------- */
  process: [
    { n: "01", title: "Discovery", text: "Understanding the client's business, goals and audience." },
    { n: "02", title: "Strategy", text: "Developing a suitable content and creative direction." },
    { n: "03", title: "Creation", text: "Producing designs, copywriting and content." },
    { n: "04", title: "Delivery & Optimization", text: "Delivering the work and improving future content based on feedback and performance." }
  ]
};

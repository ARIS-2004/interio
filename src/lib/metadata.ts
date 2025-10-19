export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: "InterioAura - Award-Winning Interior Design Studio | Kolkata",
    description: "Transform your space with InterioAura's award-winning interior design services in Kolkata. 15+ years experience, 1000+ projects, 50+ awards. Residential & commercial design with 3D visualization.",
    keywords: "interior design Kolkata, residential design, commercial design, 3D visualization, home decor, office design, award winning designer",
    ogImage: "/hero-living.jpg"
  },
  portfolio: {
    title: "Portfolio - Interior Design Projects | InterioAura Kolkata",
    description: "Explore our award-winning interior design portfolio featuring 1000+ completed residential and commercial projects. Modern luxury bedrooms, kitchens, offices, and more.",
    keywords: "interior design portfolio, residential projects, commercial projects, luxury interiors, modern design, Kolkata interior designer",
    ogImage: "/project-bedroom.jpg"
  },
  services: {
    title: "Interior Design Services - Residential & Commercial | InterioAura",
    description: "Comprehensive interior design services including residential design, commercial spaces, custom furniture, renovation management, and design consultation. Free consultation available.",
    keywords: "interior design services, residential design, commercial design, custom furniture, renovation, design consultation, Kolkata",
    ogImage: "/project-kitchen.jpg"
  },
  about: {
    title: "About Us - Award-Winning Interior Designers | InterioAura",
    description: "Meet InterioAura's expert team of interior designers. Founded in 2009, we've completed 1000+ projects and won 50+ awards. Learn our story, mission, and values.",
    keywords: "interior design team, about InterioAura, interior designers Kolkata, design studio history, award winning designers",
    ogImage: "/project-office.jpg"
  },
  awards: {
    title: "Awards & Recognition - Interior Design Excellence | InterioAura",
    description: "InterioAura has won 50+ interior design awards and featured in leading publications. Recognized for excellence in residential, commercial, and sustainable design.",
    keywords: "interior design awards, design recognition, award winning studio, design excellence, interior design magazine features",
    ogImage: "/project-restaurant.jpg"
  },
  blog: {
    title: "Interior Design Blog - Tips, Trends & Inspiration | InterioAura",
    description: "Get the latest interior design trends, tips, and inspiration from InterioAura's expert designers. Learn about sustainable materials, space optimization, and design psychology.",
    keywords: "interior design blog, design trends, design tips, home decor ideas, interior design inspiration, design advice",
    ogImage: "/hero-living.jpg"
  },
  contact: {
    title: "Contact Us - Free Interior Design Consultation | InterioAura Kolkata",
    description: "Get a free interior design consultation with InterioAura. Located in Newtown, Kolkata. Call +91-98765-43210 or email hello@interioaura.in. Mon-Sat 9AM-6PM.",
    keywords: "interior design consultation, contact interior designer, Kolkata interior design, free consultation, design quote",
    ogImage: "/project-bathroom.jpg"
  }
};

export const updatePageMetadata = (page: keyof typeof pageMetadata) => {
  const metadata = pageMetadata[page];
  if (!metadata) return;

  // Update title
  document.title = metadata.title;

  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', metadata.description);
  }

  // Update keywords
  if (metadata.keywords) {
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', metadata.keywords);
    }
  }

  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');

  if (ogTitle) ogTitle.setAttribute('content', metadata.title);
  if (ogDescription) ogDescription.setAttribute('content', metadata.description);
  if (ogImage && metadata.ogImage) ogImage.setAttribute('content', metadata.ogImage);

  // Update Twitter tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  const twitterImage = document.querySelector('meta[name="twitter:image"]');

  if (twitterTitle) twitterTitle.setAttribute('content', metadata.title);
  if (twitterDescription) twitterDescription.setAttribute('content', metadata.description);
  if (twitterImage && metadata.ogImage) twitterImage.setAttribute('content', metadata.ogImage);

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', `https://interioaura.com${metadata.canonical || window.location.pathname}`);
};
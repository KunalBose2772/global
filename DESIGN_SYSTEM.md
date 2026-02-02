# 🎨 Global Webify Design System Reference

## Quick Access Guide for Developers

---

## 🎨 Brand Colors (LOCKED)

```css
/* Primary Colors */
--primary: #0EA5E9;      /* Sky Blue - Main brand color */
--secondary: #22C55E;    /* Green - Success, growth */
--accent: #00C2FF;       /* Cyan - Highlights, CTAs */

/* Background System */
--bg-main: #FFFFFF;      /* Pure white - Main background */
--bg-soft: #F7FAFC;      /* Soft gray - Alternate sections */
--bg-card: #FFFFFF;      /* Card backgrounds */
--bg-hover: #F1F5F9;     /* Hover states */

/* Text System */
--text-primary: #0F172A;    /* Almost black - Headlines */
--text-secondary: #334155;  /* Dark gray - Body text */
--text-muted: #64748B;      /* Medium gray - Captions */
--text-inverse: #FFFFFF;    /* White - On dark backgrounds */

/* Brand Gradient */
--brand-gradient: linear-gradient(
  135deg,
  #0EA5E9 0%,
  #00C2FF 40%,
  #22C55E 100%
);
```

---

## 📐 Spacing Scale

```css
--space-xs: 0.25rem;    /* 4px */
--space-sm: 0.5rem;     /* 8px */
--space-md: 1rem;       /* 16px */
--space-lg: 1.5rem;     /* 24px */
--space-xl: 2rem;       /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
```

**Usage Example:**
```css
.myComponent {
  padding: var(--space-lg);
  margin-bottom: var(--space-2xl);
}
```

---

## 🔤 Typography

### Font Family
```css
font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
```

### Font Sizes
```css
--font-size-xs: 0.75rem;     /* 12px */
--font-size-sm: 0.875rem;    /* 14px */
--font-size-base: 1rem;      /* 16px */
--font-size-lg: 1.125rem;    /* 18px */
--font-size-xl: 1.25rem;     /* 20px */
--font-size-2xl: 1.5rem;     /* 24px */
--font-size-3xl: 1.875rem;   /* 30px */
--font-size-4xl: 2.25rem;    /* 36px */
--font-size-5xl: 3rem;       /* 48px */
--font-size-6xl: 3.75rem;    /* 60px */
```

### Heading Usage
```jsx
<h1>Main Page Title</h1>        {/* 3rem / 48px */}
<h2>Section Heading</h2>        {/* 2.25rem / 36px */}
<h3>Subsection</h3>             {/* 1.875rem / 30px */}
<h4>Card Title</h4>             {/* 1.5rem / 24px */}
```

---

## 🎭 Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-glow: 0 0 20px rgba(14, 165, 233, 0.3);
```

**Usage:**
```css
.card {
  box-shadow: var(--shadow-md);
}

.card:hover {
  box-shadow: var(--shadow-xl);
}

.glowButton {
  box-shadow: var(--shadow-glow);
}
```

---

## 🔘 Border Radius

```css
--radius-sm: 0.375rem;   /* 6px - Small elements */
--radius-md: 0.5rem;     /* 8px - Cards, inputs */
--radius-lg: 0.75rem;    /* 12px - Large cards */
--radius-xl: 1rem;       /* 16px - Hero sections */
--radius-full: 9999px;   /* Fully rounded - Pills, badges */
```

---

## ⚡ Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
```

**Usage:**
```css
.button {
  transition: all var(--transition-base);
}

.button:hover {
  transform: translateY(-2px);
}
```

---

## 🪟 Glassmorphism

### Pre-built Class
```jsx
<div className="glass-card">
  {/* Your content */}
</div>
```

### Custom Implementation
```css
.myGlassElement {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--glass-shadow);
}
```

---

## 🌈 Gradient Text

```jsx
<h1 className="text-gradient">
  Gradient Headline
</h1>
```

**CSS:**
```css
.text-gradient {
  background: var(--brand-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 📦 Container System

```jsx
{/* Standard container - 1280px max */}
<div className="container">
  {/* Content */}
</div>

{/* Wide container - 1536px max */}
<div className="container container-wide">
  {/* Content */}
</div>

{/* Narrow container - 960px max */}
<div className="container container-narrow">
  {/* Content */}
</div>
```

---

## 📏 Section Spacing

```jsx
{/* Standard section - 4rem (64px) padding */}
<section className="section">
  {/* Content */}
</section>

{/* Small section - 3rem (48px) padding */}
<section className="section-sm">
  {/* Content */}
</section>

{/* Large section - 5rem (80px) padding */}
<section className="section-lg">
  {/* Content */}
</section>
```

---

## 🎯 Z-Index Scale

```css
--z-base: 1;
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
```

---

## 🎬 Animation Classes

```jsx
{/* Fade in */}
<div className="animate-fade-in">
  {/* Content */}
</div>

{/* Slide up */}
<div className="animate-slide-up">
  {/* Content */}
</div>
```

---

## 🔘 Button Patterns

### Primary Button (Gradient)
```jsx
<a href="/contact" className={styles.primaryBtn}>
  <span>Start Your Project</span>
  <ArrowRight size={20} />
</a>
```

```css
.primaryBtn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  background: var(--brand-gradient);
  color: var(--text-inverse);
  font-weight: 600;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-base);
}

.primaryBtn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl), var(--shadow-glow);
}
```

### Secondary Button (Outline)
```css
.secondaryBtn {
  display: inline-flex;
  align-items: center;
  padding: var(--space-md) var(--space-xl);
  background: var(--bg-main);
  color: var(--text-primary);
  font-weight: 600;
  border: 2px solid var(--primary);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.secondaryBtn:hover {
  background: var(--primary);
  color: var(--text-inverse);
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Mobile: Default (0-767px) */
/* Tablet: 768px+ */
@media (min-width: 768px) {
  /* Tablet styles */
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Large Desktop: 1280px+ */
@media (min-width: 1280px) {
  /* Large desktop styles */
}
```

---

## ♿ Accessibility

### Screen Reader Only
```jsx
<h1 className="sr-only">
  Hidden from visual users, visible to screen readers
</h1>
```

### Focus Styles
All interactive elements automatically get:
```css
*:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎨 Common Patterns

### Card Component
```jsx
<div className="glass-card" style={{
  padding: 'var(--space-xl)',
  marginBottom: 'var(--space-lg)'
}}>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>
```

### Section with Gradient Background
```jsx
<section className="section gradient-bg">
  <div className="container text-center">
    <h2 style={{ color: 'var(--text-inverse)' }}>
      Section Title
    </h2>
  </div>
</section>
```

### Centered Text
```jsx
<div className="text-center">
  <h2>Centered Heading</h2>
  <p className="text-muted">Centered muted text</p>
</div>
```

---

## 🚀 Performance Tips

1. **Use CSS Variables** - Instant theme changes
2. **Lazy Load Images** - Use Next/Image component
3. **Code Splitting** - Automatic with Next.js modules
4. **Framer Motion** - Use `whileInView` for scroll animations
5. **Reduce Motion** - Respect user preferences

---

## 📚 Quick Reference

| Element | Variable | Value |
|---------|----------|-------|
| Primary Color | `--primary` | #0EA5E9 |
| Secondary Color | `--secondary` | #22C55E |
| Accent Color | `--accent` | #00C2FF |
| Base Font Size | `--font-size-base` | 1rem (16px) |
| Container Max Width | `.container` | 1280px |
| Standard Padding | `--space-lg` | 1.5rem (24px) |
| Border Radius | `--radius-lg` | 0.75rem (12px) |
| Transition | `--transition-base` | 250ms |

---

**Last Updated**: January 30, 2026  
**Version**: 1.0.0

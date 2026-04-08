# Tailwind HTML Template

This is a modern HTML template built with **Tailwind CSS via CDN**. It’s fully responsive, easy to customize, and ready to use.

## Features
- Fully responsive design
- Custom Tailwind CSS colors, fonts, and shadows
- Easy to modify
- Lightweight and fast
- Perfect for portfolios, landing pages, or small projects

## How to Use
1. Unzip the `my-template.zip` folder.
2. Open `index.html` in your browser to preview.
3. Customize colors, fonts, and content directly in `index.html`.
4. Optional: Add your own images in the `images/` folder.

## Tailwind Customization
You can adjust colors and fonts in the `<script>` tag:
```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: { primary: '#395C22', secondary: '#F6D045', dark: '#0E220E' },
        fontFamily: { sans: ['Inter', 'sans-serif'] },
      }
    }
  }
</script>


---

## **4. Optional: custom.css**
```css
/* Add extra styles if needed */
body {
  line-height: 1.6;
}
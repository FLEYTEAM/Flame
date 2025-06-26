![Flame Logo](https://fleyteam.github.io/Flame/imgs/flame-logo-bg.png)

**Flame** is a lightweight, utility-first CSS kit designed for simplicity, responsiveness, and scalability. Built with clean and consistent **BEM class naming**, it offers a structured way to write HTML and CSS — ideal for both small prototypes and large front-end projects.

DEMO Components: [Flame](https://fleyteam.github.io/Flame)

## 🎯 Purpose

* Minimal but powerful
* Clear **BEM-based** class naming
* Responsive utilities with familiar breakpoints
* A curated set of modern colors
* 100% pure CSS — no JavaScript, no dependencies

## ✨ Features

* 📦 **Utility & Component Classes**:

  * Spacing: `m-1`, `p-2`
  * Layout: `d-flex`, `justify-between`
  * Typography: `text-lg`, `fw-bold`
  * Display: `visibility-hidden`, `d-inline-block`
  * Borders, shadows, backgrounds, radius
* 🎨 **Color Palette**:

  * `color--default`, ...
  * Grayscale: `color--gray-100` → `color--gray-900`
* 🧱 **BEM-based Component Naming**:

  * `.card`, `.card__title`, `.card__body`, `.card--highlighted`
  * `.btn`, `.btn--default`, `.btn--sm`
* 📱 **Responsive Utilities**:

  * Bootstrap-like breakpoints: `sm`, `md`, `lg`, `xl`
  * Example: `d__md--flex`, `text__md--center`

## 🖐️ BEM Naming Convention

Flame uses BEM (Block–Element–Modifier) naming pattern:

```
.block {}
.block__element {}
.block--modifier {}
.utility__breakpoint--modifier {}
```

**Examples**:

```html
<div class="card card--shadow">
  <div class="card__title">Card Title</div>
  <div class="card__body">Card content here.</div>
</div>

<button class="btn btn--primary btn--large">Click Me</button>
```

> Utility classes supported responsive and surfixed with `__md` like Bootstrap.

```html
<div class="p__md--4 bg--primary text-white">
  Simple utility box
</div>
```

## 🚀 Getting Started

Flame uses [normalize.css](https://necolas.github.io/normalize.css/) for cross-browser consistency.

Inspired by [BEM](https://getbem.com/introduction/).

### Option 1: CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fleyteam/flame/dist/css/flame.min.css">
<!-- JS for dropdown, ignore this one if you are using JS Framework -->

<script src="https://cdn.jsdelivr.net/gh/fleyteam/flame/dist/js/base.js"><script>
<script src="https://cdn.jsdelivr.net/gh/fleyteam/flame/dist/js/dropdowndropdown.js"><script>
```

### Option 2: Manual

1. Download [flame.css](https://github.com/FLEYTEAM/Flame/tree/main/dist/css) or compressed [flame.min.css](https://github.com/FLEYTEAM/Flame/tree/main/dist/css)
2. Link it in your project:

```html
<link rel="stylesheet" href="/css/flame.css">
```

Don't forget to add js, ignore this one if you are using JS Framework:
```html
<script src="https://cdn.jsdelivr.net/gh/fleyteam/flame/dist/js/base.js"><script>
<script src="https://cdn.jsdelivr.net/gh/fleyteam/flame/dist/js/dropdowndropdown.js"><script>
```

## 🧪 Usage Example

```html
<div class="card card--shadow u-p-4 u-bg--white">
  <h3 class="card__title u-text--primary">Welcome to Flame</h3>
  <p class="card__body">This is a simple card with BEM naming.</p>
</div>
```

## 🔧 Responsive Design

Flame supports responsive utilities using Bootstrap-style breakpoints:

| Surfix | Min Width |
| ------ | --------- |
| `xs`  | < 576px   |
| `sm`  | 576px     |
| `md`  | 768px     |
| `lg`  | 992px     |
| `xl`  | 1200px    |
```html
<div class="text-center text__md-left">
  I'm responsive!
</div>
```

## 📁 File Size

| File            | Size    |
| --------------- | ------- |
| `flame.min.css` | \~72 KB |
| `base.js`       | \~2 KB  |
| `dropdown.js`   | \~1 KB  |

## 🌐 Browser Support

Tested on:

* Chrome
* Firefox
* Safari
* Edge
* Opera

## 📄 License

MIT License

## 👤 Author

Created by \[Vieque]
Contact: \[[nguyenquocviet2312@outlook.com](mailto:nguyenquocviet2312@outlook.com)]

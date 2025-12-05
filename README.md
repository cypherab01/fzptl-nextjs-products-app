# FZPTL Next.js Products App

A Next.js 16 application that fetches product data from a public API on the server and renders it using server-side rendering for better performance and SEO. Users can browse the products and filter them by category on the client side, making it easy to explore different types of products without reloading the page.

## Features

- **Server-Side Rendering (SSR)** for fast initial load and SEO.
- **Caching / Revalidate** with ISR to keep product data up to date.
- **Client-Side Category Filtering** without page reloads.
- **Performance Optimized** using `useMemo` for filtering and categories.
- **SEO Friendly** with dynamic metadata.
- **Loading Skeleton** on product cards while data loads.

## Steps to Run

1. **Clone the repository**

```bash
git clone https://github.com/cypherab01/fzptl-nextjs-products-app
cd fzptl-nextjs-products-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

4. **Build for production**

```bash
npm run build
npm run start
```

---

## API Used

- [FakeStoreAPI](https://fakestoreapi.com/products)

## Author

**[Abhishek Ghimire](https://github.com/cypherab01)**

Task Completed: Yes

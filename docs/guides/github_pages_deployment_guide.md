# Hướng Dẫn Deploy Vite SPA lên GitHub Pages

Hướng dẫn cấu hình CI/CD tự động build và deploy ứng dụng Vite & TypeScript lên GitHub Pages qua GitHub Actions.

---

## 1. Yêu cầu Tiền đề (Prerequisites)

Truy cập **Settings** ➔ **Pages** trên GitHub repository:
- **Source**: Chọn **GitHub Actions** (thay vì *Deploy from a branch*).

---

## 2. Cấu hình Vite (`vite.config.ts`)

Đặt `base: './'` để static assets được nạp đúng theo đường dẫn tương đối (tránh lỗi trang trắng/404):

```typescript
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Đường dẫn tương đối giúp static assets load đúng trên GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
```

---

## 3. Cấu hình GitHub Actions (`.github/workflows/deploy.yml`)

Tạo hoặc cập nhật file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [master]
    paths:
      - 'src/**'
      - 'public/**'
      - 'index.html'
      - 'package.json'
      - 'package-lock.json'
      - 'vite.config.ts'
      - 'tsconfig.json'
      - '.github/workflows/deploy.yml'
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: npm

      - name: Install and build
        run: |
          npm ci
          npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 4. Xử lý Lỗi Thường Gặp (Troubleshooting)

| Sự cố | Nguyên nhân | Cách xử lý |
| :--- | :--- | :--- |
| **Trang trắng / Lỗi 404 assets** | Thiếu `base: './'` trong `vite.config.ts` | Thêm `base: './'` vào `vite.config.ts` |
| **Lỗi 403 / Permission denied** | Thiếu `permissions` trong `deploy.yml` hoặc chưa chọn Source: GitHub Actions | Cập nhật `permissions` và cấu hình GitHub Settings ➔ Pages |
| **Build fail tại `npm run build`** | Lỗi TypeScript / typecheck | Chạy `npm run typecheck` local để sửa lỗi trước khi push |
| **Workflow không tự chạy** | Nhánh push không khớp (`master`/`main`) hoặc file sửa không thuộc `paths` | Kiểm tra tên nhánh chính và danh sách `paths` trong `deploy.yml` |


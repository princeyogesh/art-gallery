# Art Gallery React Application

## Features
- Responsive art gallery built with React and Material UI
- Two user roles: Admin (add/update images) and Viewer (browse, shortlist, interact)
- Three main tabs: Home, Contact Us, About Us
- Admin can upload images, which are published to a GitHub repo
- Modern, maintainable code structure
- Docker and GitHub Pages deployment support

## Project Structure
```
art-gallery/
  src/
    components/
    context/
    pages/
  public/
  Dockerfile
  docker-compose.yml
```

## Running Locally
```bash
# Build and run with Docker
cd art-gallery
sudo docker build -t art-gallery-app .
sudo docker run -p 3000:80 art-gallery-app

# Or use docker-compose
sudo docker-compose up --build
```

## Hosting on GitHub Pages
1. Add `homepage` to your `package.json`:
   ```json
   "homepage": "https://<your-github-username>.github.io/<repo-name>"
   ```
2. Install gh-pages:
   ```bash
   npm install --save gh-pages
   ```
3. Add scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```

## Design Pattern
- Component-based structure
- Context API for authentication/role management
- Separation of concerns for maintainability

## Contribution
- Fork the repo, create a branch, submit PRs

---
For any issues, contact the maintainer.

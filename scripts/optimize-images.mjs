import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectDir = path.join(__dirname, '..', 'public', 'projects');

async function processProjects() {
  if (!fs.existsSync(projectDir)) {
    console.log(`Project directory ${projectDir} does not exist.`);
    return;
  }
  const dirs = fs.readdirSync(projectDir);
  for (const dir of dirs) {
    const fullPath = path.join(projectDir, dir);
    if (!fs.statSync(fullPath).isDirectory()) continue;
    
    const desktopPath = path.join(fullPath, 'desktop.webp');
    if (fs.existsSync(desktopPath)) {
      console.log(`Processing ${dir}...`);
      
      // Desktop Poster (1440x900)
      await sharp(desktopPath)
        .resize(1440, 900, { position: 'top', fit: 'cover' })
        .webp({ quality: 78 })
        .toFile(path.join(fullPath, 'poster.webp'));
        
      // Tablet Poster (768x500)
      await sharp(desktopPath)
        .resize(768, 500, { position: 'top', fit: 'cover' })
        .webp({ quality: 78 })
        .toFile(path.join(fullPath, 'poster-768.webp'));
        
      // Mobile Poster (390x844) from desktop or mobile if it exists
      const mobileSource = fs.existsSync(path.join(fullPath, 'mobile.webp')) 
        ? path.join(fullPath, 'mobile.webp') 
        : desktopPath;
        
      await sharp(mobileSource)
        .resize(390, 844, { position: 'top', fit: 'cover' })
        .webp({ quality: 78 })
        .toFile(path.join(fullPath, 'mobile-poster.webp'));
    }
  }
  console.log("Done generating poster images!");
}

processProjects().catch(console.error);

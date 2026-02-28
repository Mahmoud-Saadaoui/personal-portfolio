#!/usr/bin/env node

/**
 * Image Optimization Script
 * Optimizes images in src/assets/ for better web performance
 * Usage: node scripts/optimize-images.js
 */

import { execSync } from 'child_process';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const assetsPath = join(process.cwd(), 'src', 'assets');

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function getFileSize(filePath) {
  const stats = statSync(filePath);
  return stats.size;
}

function scanDirectory(dirPath) {
  const files = readdirSync(dirPath, { withFileTypes: true });
  const images = [];

  for (const file of files) {
    if (file.isDirectory()) {
      images.push(...scanDirectory(join(dirPath, file.name)));
    } else if (
      file.name.match(/\.(jpg|jpeg|png|gif|webp)$/i) &&
      !file.name.includes('.webp')
    ) {
      const fullPath = join(dirPath, file.name);
      const size = getFileSize(fullPath);
      images.push({
        path: fullPath,
        name: file.name,
        size,
        sizeFormatted: formatBytes(size),
      });
    }
  }

  return images;
}

console.log('🖼️  Scanning for images to optimize...\n');

const images = scanDirectory(assetsPath);

if (images.length === 0) {
  console.log('No images found.');
  process.exit(0);
}

// Display large images that need optimization
const largeImages = images.filter(img => img.size > 100 * 1024);

if (largeImages.length > 0) {
  console.log('⚠️  Large images found ( > 100KB ):');
  largeImages.forEach(img => {
    console.log(`   ${img.name}: ${img.sizeFormatted}`);
  });
  console.log('\n💡 Recommendations:');
  console.log('   1. Convert PNG to WebP for 70-80% size reduction');
  console.log('   2. Use online tools like: https://squoosh.app/');
  console.log('   3. Or run: npx @squoosh/cli --dir src/assets --output-dir src/assets/optimized');
  console.log('\n   For profile.png specifically:');
  console.log(`   Current size: ${formatBytes(getFileSize(join(assetsPath, 'profile.png')))}`);
  console.log('   Target: < 100KB (use WebP quality 80-85)');
} else {
  console.log('✅ All images are optimized! (< 100KB each)');
}

console.log(`\n📊 Total images found: ${images.length}`);

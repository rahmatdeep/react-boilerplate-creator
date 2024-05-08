#!/usr/bin/env node

import fs from "fs"
import path from "path";

const baseDir = path.resolve(__dirname, 'src');

// Check if the 'src' directory exists
if (!fs.existsSync(baseDir)) {
    console.error('Error: The "src" directory does not exist. Please create it before running this script.');
    process.exit(1); // Exit with an error code
}

const folders = [
    'components/ui',
    'hooks',
    'pages',
    'services',
    'utils'
];

folders.forEach(dir => {
    const fullPath = path.resolve(baseDir, dir);
    try {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log('Folder created:', fullPath);
    } catch (error) {
        console.error('Failed to create folder:', error);
    }
});

console.log('All specified folders have been created successfully.');

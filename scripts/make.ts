import path = require('path');
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { CONST } from './constants';

export default async function makeFile(command: string, name: string) {
    try {
        // Parse the name into directory and filename
        const parsedPath = path.parse(name);
        const dirPath = path.join(__dirname, '..', 'src', 'app', CONST.DIR_NAME[command], parsedPath.dir);
        const filename = parsedPath.name;
        const ext = parsedPath.ext || '.ts';

        // Create the directory if it doesn't exist
        if (!existsSync(dirPath)) {
            mkdirSync(dirPath, { recursive: true });
        }

        // Create a new file in the directory
        const filePath = path.join(dirPath, `${filename}${ext}`);


        // Write the template to the file
        writeFileSync(filePath, CONST.TEMPLATES[command](filename), { signal: AbortSignal.timeout(5000) });

        // Check if the index file exists
        const indexPath = path.join(dirPath, 'index.ts');
        if (!existsSync(indexPath)) {
            writeFileSync(indexPath, '', { signal: AbortSignal.timeout(5000) });
        }

        // Add exports all classes to index of the directory
        const indexContent = readFileSync(indexPath, 'utf-8');
        const newContent = `export { default as ${filename} } from './${filename}';\n`;
        // check if the new content is not already in the index
        if (indexContent.indexOf(newContent) === -1) {
            const newIndexContent = `${newContent}${indexContent}`;
            writeFileSync(indexPath, newIndexContent, { signal: AbortSignal.timeout(5000) });
        }

        // Log a success message
        console.info('\x1b[32m%s\x1b[0m', `Successfully created ${command}: ${filePath}`);
    } catch (error) {
        console.error(`Failed to create ${command}: ${error}`);
    }
}
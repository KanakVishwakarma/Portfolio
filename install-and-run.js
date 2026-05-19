const { execSync } = require('child_process');
const path = require('path');

const projectDir = 'c:\\Users\\Dell\\Desktop\\Projects\\Portfolio';
process.chdir(projectDir);

try {
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('\n✅ Installation complete!');
  console.log('\nTo start your portfolio:\n');
  console.log('  cd c:\\Users\\Dell\\Desktop\\Projects\\Portfolio');
  console.log('  npm run dev');
  console.log('\nYour portfolio will be available at http://localhost:5173');
} catch (error) {
  console.error('Error installing dependencies:', error.message);
  process.exit(1);
}

import fs from 'fs';
import path from 'path';

const FILES = [
    'src/pages/Home.jsx',
    'src/pages/services/TeethWhitening.jsx',
    'src/pages/services/TeethCleaning.jsx',
    'src/pages/services/DentalImplants.jsx',
    'src/pages/services/BracesAligners.jsx',
    'src/pages/services/RootCanal.jsx',
    'src/components/layout/Navbar.jsx',
    'src/components/layout/Footer.jsx',
    'src/components/common/EnquiryModal.jsx',
    'src/App.jsx'
];

for (const file of FILES) {
    const filePath = path.join(process.cwd(), file);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf-8');

    // 1. Fix broken images
    content = content.replace(/1533038575990-234b07c8b88d/g, '1606811971618-4486d14f3f99'); // Dentist
    content = content.replace(/1621905252507-b35242d0755a/g, '1445527815219-ecbfec67492e'); // Clinic
    content = content.replace(/1629909613654-28a3a7c4bc40/g, '1445527815219-ecbfec67492e'); // Clinic
    content = content.replace(/1521119956141-80bfe64cea0d/g, '1544005313-94ddf0286df2'); // Patient

    // 2. Fix sticky overlap on mobile (Sanctuary Protocol etc)
    content = content.replace(/className="sticky top-32"/g, 'className="relative lg:sticky top-32"');
    content = content.replace(/className="([^"]*)sticky([^"]*)"/g, (match, prefix, suffix) => {
        // Only target if it doesn't already have lg:sticky and is just sticky
        if (!prefix.includes('lg:sticky') && !suffix.includes('lg:sticky')) {
            return `className="${prefix}relative lg:sticky${suffix}"`;
        }
        return match;
    });

    // 3. Fix horizontal scroll / general padding
    // Replace hardcoded px-12 and px-8 with robust responsive paddings
    content = content.replace(/\bpx-12\b/g, 'px-6 md:px-12');
    content = content.replace(/\bpx-8\b/g, 'px-6 md:px-8');

    // Make sure we don't have px-6 md:px-6 md:px-12
    content = content.replace(/px-6 md:px-6/g, 'px-6');
    content = content.replace(/px-6 md:px-12 md:px-12/g, 'px-6 md:px-12');

    // Replace static widths forcing horizontal scroll if any
    content = content.replace(/w-\[100vw\]/g, 'w-full');

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
}

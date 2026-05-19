import { RealImage } from './real-image';
import { ProxyImage } from './proxy-image';
import { ImageGallery } from './image-gallery';

/**
 * Proxy Pattern Example - Image Loading
 * 
 * This example demonstrates the Proxy pattern for an image loading
 * system that uses lazy loading to improve performance.
 * 
 * The Proxy pattern:
 * - Provides a surrogate or placeholder for another object
 * - Controls access to the original object
 * - Can perform operations before/after forwarding requests
 * - Enables lazy loading, caching, access control, etc.
 */

function demonstrateProxy(): void {
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║           Proxy Pattern - Image Loading Example           ║');
  console.log('║            Control Access, Enable Lazy Loading            ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  // Example 1: Direct RealImage (eager loading)
  console.log('📌 Example 1: Direct RealImage (Eager Loading)');
  console.log('─'.repeat(60));

  console.log('Creating RealImage (loads immediately):');
  const realImage = new RealImage('photo1.jpg');
  console.log('Image created and loaded.\n');

  // Example 2: ProxyImage (lazy loading)
  console.log('📌 Example 2: ProxyImage (Lazy Loading)');
  console.log('─'.repeat(60));

  console.log('Creating ProxyImage (does not load yet):');
  const proxyImage = new ProxyImage('photo2.jpg');
  console.log(`Image loaded: ${proxyImage.isLoaded()}\n`);

  console.log('Displaying image (loads now):');
  proxyImage.display();
  console.log(`Image loaded: ${proxyImage.isLoaded()}\n`);

  // Example 3: Image Gallery with Proxy
  console.log('📌 Example 3: Image Gallery with Proxy');
  console.log('─'.repeat(60));

  const gallery = new ImageGallery();
  console.log('Adding images to gallery:');
  gallery.addImage('vacation1.jpg');
  gallery.addImage('vacation2.jpg');
  gallery.addImage('vacation3.jpg');
  gallery.addImage('vacation4.jpg');
  gallery.addImage('vacation5.jpg');

  console.log(`\nGallery has ${gallery.getImageCount()} images`);
  console.log('Images are not loaded yet (using proxies).\n');

  // Example 4: Lazy loading on demand
  console.log('📌 Example 4: Lazy Loading on Demand');
  console.log('─'.repeat(60));

  console.log('Displaying only image 3:');
  gallery.displayImage(2); // Index 2 = 3rd image
  console.log();

  // Example 5: Memory efficiency
  console.log('📌 Example 5: Memory Efficiency');
  console.log('─'.repeat(60));

  console.log('Without Proxy Pattern:');
  console.log('  • All images loaded immediately');
  console.log('  • High memory usage');
  console.log('  • Slow startup time');
  console.log();
  console.log('With Proxy Pattern:');
  console.log('  • Images loaded only when needed');
  console.log('  • Lower memory usage');
  console.log('  • Faster startup time');
  console.log('  • Better performance');
  console.log();

  // Example 6: Multiple displays
  console.log('📌 Example 6: Multiple Displays');
  console.log('─'.repeat(60));

  const gallery2 = new ImageGallery();
  gallery2.addImage('image1.jpg');
  gallery2.addImage('image2.jpg');

  console.log('First display (loads images):');
  gallery2.displayImage(0);
  console.log();

  console.log('Second display (images already loaded):');
  gallery2.displayImage(0);
  console.log();

  // Example 7: Proxy pattern benefits
  console.log('📌 Example 7: Proxy Pattern Benefits');
  console.log('─'.repeat(60));

  console.log('Proxy can be used for:');
  console.log('  1. Lazy loading - load objects only when needed');
  console.log('  2. Caching - cache expensive operations');
  console.log('  3. Access control - control access to objects');
  console.log('  4. Logging - log access to objects');
  console.log('  5. Remote proxy - represent remote objects');
  console.log('  6. Virtual proxy - create expensive objects on demand');
  console.log();

  // Summary
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  Key Benefits of Proxy Pattern:                            ║');
  console.log('║    1. Controls access to the original object               ║');
  console.log('║    2. Enables lazy loading                                 ║');
  console.log('║    3. Can add functionality (caching, logging, etc.)       ║');
  console.log('║    4. Reduces memory usage                                 ║');
  console.log('║    5. Improves performance                                 ║');
  console.log('║    6. Same interface as real object                        ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
}

// Run the example
demonstrateProxy();

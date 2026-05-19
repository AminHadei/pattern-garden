# Proxy Pattern - Image Loading

This project provides a complete example of the Proxy pattern for an image loading system that uses lazy loading to improve performance.

## Overview

The Proxy pattern provides a surrogate or placeholder for another object to control access to it. It can perform operations before or after forwarding requests to the real object, enabling lazy loading, caching, access control, and more.

## Components

### 1. Image Interface
Defines the interface for image objects with `display()` and `getFilename()` methods.

### 2. Real Image
- **RealImage**: The actual image object that performs expensive operations like loading from disk

### 3. Proxy Image
- **ProxyImage**: A proxy that controls access to the RealImage, implementing lazy loading

### 4. Image Gallery
- **ImageGallery**: A gallery that uses proxy images for efficient memory management

## File Structure

```
proxy/
├── image.ts                    # Image interface
├── real-image.ts               # Real image implementation
├── proxy-image.ts              # Proxy image implementation
├── image-gallery.ts            # Image gallery using proxies
├── proxy-example.ts            # Proxy pattern usage example
└── README.md                   # This file
```

## Usage

### Basic Proxy Usage

```typescript
import { ProxyImage } from './proxy-image';

// Proxy is created (image not loaded yet)
const proxy = new ProxyImage('photo.jpg');

// Image is loaded only when displayed
proxy.display();
```

### Image Gallery

```typescript
import { ImageGallery } from './image-gallery';

const gallery = new ImageGallery();
gallery.addImage('photo1.jpg');
gallery.addImage('photo2.jpg');

// Images are loaded only when displayed
gallery.displayImage(0);
```

## Running the Example

To execute this example, use the following command:

```bash
npx ts-node src/proxy/proxy-example.ts
```

Alternatively, you can compile and run:

```bash
npx tsc
node dist/proxy/proxy-example.js
```

## Benefits of Proxy Pattern

1. **Access Control**: Controls access to the original object
2. **Lazy Loading**: Loads objects only when needed
3. **Additional Functionality**: Can add caching, logging, etc.
4. **Memory Efficiency**: Reduces memory usage
5. **Performance**: Improves performance by deferring expensive operations
6. **Same Interface**: Uses the same interface as the real object

## Design Pattern

Proxy is a structural design pattern that:
- Provides a surrogate or placeholder for another object
- Controls access to the original object
- Can perform operations before/after forwarding requests
- Enables lazy loading, caching, access control, etc.

## Use Cases

This pattern is useful in the following scenarios:
- Image loading (lazy loading)
- Virtual proxies (create expensive objects on demand)
- Remote proxies (represent remote objects)
- Protection proxies (access control)
- Caching proxies (cache expensive operations)
- Logging proxies (log access to objects)
- When you want to control access to an object
- When you want to add functionality without changing the object

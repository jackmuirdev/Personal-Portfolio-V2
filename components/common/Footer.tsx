import React from 'react';

export default function Footer() {
  return (
    <footer className="text-black py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Jack Muir. All rights reserved.</p>
      </div>
    </footer>
  );
}

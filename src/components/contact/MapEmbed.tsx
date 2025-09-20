'use client';

import { useState } from 'react';

const MapEmbed = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mt-8 rounded-xl overflow-hidden shadow-lg max-w-[1000px] mx-auto mb-4 relative">
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse rounded-xl z-10" />
      )}

      {/* Google Map iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21719.311205000955!2d35.01836167150341!3d-15.779255045872036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d84f86374529a9%3A0x4615e5e23357bd39!2sNdirande%2C%20Blantyre!5e0!3m2!1sen!2smw!4v1758391991911!5m2!1sen!2smw"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoaded(true)}
        className="relative z-0"
      />
    </div>
  );
};

export default MapEmbed;

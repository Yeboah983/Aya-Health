import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0c2866] text-white py-10 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Navigation Links */}
    <div className="flex flex-col space-y-2 text-sm">
      <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
      <a href="/chat" className="hover:underline">Chat</a>
      <a href="/match-therapist" className="hover:underline">Find Therapist</a>
      <a href="/community" className="hover:underline">Community</a>
    </div>

    {/* Socials */}
    <div className="flex flex-col space-y-2 text-sm">
      <h4 className="text-lg font-semibold mb-2">Connect with us</h4>
      <a href="https://instagram.com" target="_blank" className="hover:underline">Instagram</a>
      <a href="https://twitter.com" target="_blank" className="hover:underline">Twitter</a>
      <a href="https://wa.me/233xxxxxxxxx" target="_blank" className="hover:underline">WhatsApp</a>
    </div>

    {/* Mission / Credits */}
    <div className="text-sm text-gray-300">
      <p className="italic">
        “Built with love and resilience by Ghanaian youth.”
      </p>
      <select className="bg-[#115dfC] text-white rounded-md px-2 py-1 mt-2">
        <option value="en">English</option>
        <option value="tw">Twi</option>
        <option value="ga">Ga</option>
      </select>
    </div>
  </div>

  <div className="text-center text-xs text-gray-400 mt-6">
    &copy; {new Date().getFullYear()} Aya Health Ghana. All rights reserved.
  </div>
</footer>

  );
};
export default Footer;

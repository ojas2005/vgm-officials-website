function Discord() {
  return (
    <div className="discord-page bg-gradient-to-br from-black via-red-900 to-black min-h-screen flex flex-col items-center justify-center text-white p-6">
      <h2 className="text-4xl font-bold mb-4 text-red-500">Join Our Discord</h2>
      <p className="text-lg mb-6 text-center max-w-md">
        Connect with the VGM community, stay updated with scrims, announcements, and exclusive content!
      </p>
      <a
        href="https://discord.gg/UAa4V2HhaS"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg"
      >
        Join VGM Discord
      </a>
    </div>
  );
}

export default Discord;

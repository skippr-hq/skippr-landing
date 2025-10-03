
const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-20 px-8 bg-black">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="font-extrabold text-4xl md:text-5xl text-white leading-tight font-retro-heading">
          Get X-Ray Vision Today
        </h2>
        <p className="mt-6 text-lg text-gray-400">
          You've already made Claude Code part of your dev team.
          <br />
          Now add AI product experts the same way.
        </p>
        
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="cta-button text-lg"
          >
            Install Extension. Start Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
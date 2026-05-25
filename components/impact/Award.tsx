import {
  MdOutlineEmojiEvents,
  MdOutlineMilitaryTech,
  MdOutlineVerifiedUser,
  MdOutlineWorkspacePremium,
} from "react-icons/md";

const Award = () => {
  return (
    <section className="py-xl bg-primary text-white">
      <div className="max-md:px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl text-bold mb-16">
          Reconnaissances &amp; Prix Internationaux
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          <div className="p-8 rounded-xl border border-white/20 hover:bg-white/10 transition-colors flex flex-col items-center">
            <MdOutlineEmojiEvents
              size={40}
              className="mb-4 text-secondary-fixed"
            />
            <h4 className="font-label-md text-label-md font-bold mb-2">
              AUF Maurice
            </h4>
            <p className="text-sm opacity-80">{`Prix d'Innovation Durable`}</p>
          </div>
          <div className="p-8 rounded-xl border border-white/20 hover:bg-white/10 transition-colors flex flex-col items-center">
            <MdOutlineWorkspacePremium
              size={40}
              className="mb-4 text-secondary-fixed"
            />
            <h4 className="font-label-md text-label-md font-bold mb-2">
              AUF Angola
            </h4>
            <p className="text-sm opacity-80">Impact Social Africain</p>
          </div>
          <div className="p-8 rounded-xl border border-white/20 hover:bg-white/10 transition-colors flex flex-col items-center">
            <MdOutlineMilitaryTech
              size={40}
              className="mb-4 text-secondary-fixed"
            />
            <h4 className="font-label-md text-label-md font-bold mb-2">
              Alliance Française
            </h4>
            <p className="text-sm opacity-80">
              Partenariat Culturel &amp; Environnement
            </p>
          </div>
          <div className="p-8 rounded-xl border border-white/20 hover:bg-white/10 transition-colors flex flex-col items-center">
            <MdOutlineVerifiedUser
              size={40}
              className="mb-4 text-secondary-fixed"
            />
            <h4 className="font-label-md text-label-md font-bold mb-2">
              Green Label
            </h4>
            <p className="text-sm opacity-80">Certification Valorisation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;

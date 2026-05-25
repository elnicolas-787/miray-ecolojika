import React, { MdOutlineEmojiEvents, MdOutlineHistory, MdOutlineWorkspacePremium } from "react-icons/md";

const History = () => {
  return (
    <section className="py-xl px-16 max-w-container-max mx-auto">
      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-12 lg:col-span-7 bg-white p-lg rounded-xl border border-primary/10 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-sm mb-md text-primary">
            <MdOutlineHistory size={30} />
            <h2 className="text-bold text-3xl">
              Notre Histoire
            </h2>
          </div>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Tout a commencé au cœur de{" "}
            <span className="font-bold text-primary">Tanjombato</span>. Face à
            {`l'accumulation des déchets industriels, Miray Écolojika est née
            d'une vision simple : rien ne se perd. Notre engagement précoce nous
            a valu le prestigieux prix de l'`}
            <strong>Alliance Française</strong>{`, marquant le début de notre
            ascension comme leader de l'économie circulaire locale.`}
          </p>
        </div>
        
        <div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-gutter">
          <div className="bg-primary text-white p-md rounded-xl flex items-center gap-md">
            <div className="bg-secondary-container/20 p-sm rounded-lg">
              <MdOutlineEmojiEvents size={33} className="text-secondary-fixed" />
            </div>
            <div>
              <h5 className="text-lg text-secondary-fixed uppercase">
                Prix AUF 2023
              </h5>
              <p className="font-body-md">
                Lauréat Régional - Maurice &amp; Angola
              </p>
            </div>
          </div>
          <div className="bg-surface-container-high p-md rounded-xl border border-outline-variant flex items-center gap-md">
            <div className="bg-primary/10 p-sm rounded-lg">
              <MdOutlineWorkspacePremium size={33} className="text-primary" />
            </div>
            <div>
              <p className="text-lg text-primary uppercase">
                Alliance Française
              </p>
              <p className="font-body-md text-on-surface-variant">
                {`Prix d'Excellence Environnementale`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;

import { MdOutlineGroups, MdOutlineShield, MdOutlineSync } from "react-icons/md";

const ValueFondamental = () => {
  return (
    <section className="py-xl px-16 max-w-container-max mx-auto">
      <div className="text-center mb-xl">
        <h2 className="text-3xl text-bold text-primary">
          Nos Valeurs Fondamentales
        </h2>
        <div className="h-1 w-24 bg-secondary mx-auto mt-sm"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {/* <!-- Valeur 1 --> */}
        <div className="p-lg bg-white rounded-xl border border-primary/10 shadow-md transition-shadow">
          <div className="text-secondary mb-md">
            <MdOutlineSync size={35} />
          </div>
          <h3 className="text-bold md:text-lg text-secondary mb-sm">
            Économie Circulaire
          </h3>
          <p className="text-body-md text-on-surface-variant">
            Nous concevons des systèmes où chaque déchet redevient une matière
            première de haute qualité.
          </p>
        </div>
        {/* <!-- Valeur 2 --> */}
        <div className="p-lg bg-white rounded-xl border border-primary/10 shadow-md transition-shadow">
          <div className="text-secondary mb-md">
            <MdOutlineGroups size={35} />
          </div>
          <h3 className="text-bold md:text-lg text-secondary mb-sm">
            Impact Humain
          </h3>
          <p className="text-body-md text-on-surface-variant">
            {`Priorité à l'inclusion sociale et à l'autonomisation des femmes
              dans le secteur industriel vert.`}
          </p>
        </div>
        {/* <!-- Valeur 3 --> */}
        <div className="p-lg bg-white rounded-xl border border-primary/10 shadow-md transition-shadow">
          <div className="text-secondary mb-md">
            <MdOutlineShield size={35} />
          </div>
          <h3 className="text-bold md:text-lg text-secondary mb-sm">
            Protection
          </h3>
          <p className="text-body-md text-on-surface-variant">
            {`Préserver l'écosystème unique de Madagascar par une gestion
              rigoureuse des polluants.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueFondamental;

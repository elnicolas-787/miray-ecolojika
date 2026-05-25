import Image from "next/image";
import ContactImg from "@/public/images/contact.jpg";
import { MdOutlineCall, MdOutlineLocationOn, MdOutlineMail } from "react-icons/md"

const Contact = () => {
  return (
    <section className="py-xl bg-surface">
      <div className="px-16 max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
        <div className="order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden shadow-xl h-[450px] relative border-4 border-white">
            <Image
              alt="Map of Tanjombato center"
              className="w-full h-full object-cover"
              data-alt="A stylized aerial drone photography of the Tanjombato industrial zone in Antananarivo, Madagascar, edited with a professional architectural overlay showing green spaces and clean logistics flows. The aesthetic is bright and clear, reflecting a modern sustainable development project."
              data-location="Antananarivo"
              src={ContactImg}
            />
            <div className="absolute top-4 left-4 bg-secondary-container glass-card px-3 py-1 rounded-full flex items-center gap-xs">
              <MdOutlineLocationOn />
              <span className="font-label-md text-primary">Tongarivo Tanjombato Antananarivo</span>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-lg">
          <div>
            <h2 className="text-bold text-3xl text-primary">
              Où nous trouver ?
            </h2>
            <p className="lg:text-lg text-on-surface-variant mt-md">
              Notre centre névralgique est situé à Tanjombato, le cœur
              industriel de la capitale, prêt à vous accueillir pour discuter de
              vos projets de durabilité.
            </p>
          </div>
          <div className="space-y-md">
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MdOutlineCall size={23} />
              </div>
              <span className="text-body-md">+261 20 22 000 00</span>
            </div>
            <div className="flex items-center gap-md">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MdOutlineMail size={23} />
              </div>
              <span className="text-body-md">contact@miray-ecolojika.mg</span>
            </div>
          </div>
          <button className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded font-label-md hover:bg-primary-container transition-all shadow-lg hover:shadow-primary/20">
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

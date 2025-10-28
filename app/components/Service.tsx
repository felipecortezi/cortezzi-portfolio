import Image from "next/image";

type Props = {
  title: string;
  description: string;
  // caminho absoluto dentro de /public, ex.: "/producao.svg"
  logo: string;
};

export default function Service({ title, description, logo }: Props) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
      <div className="h-10 w-10 rounded-xl mb-4">
        {/* defina width/height ou use fill; aqui vou fixar 40x40 pra caber no h-10 w-10 */}
        <Image src={logo} alt={`Ícone ${title}`} width={40} height={40} />
      </div>

      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-neutral-400">{description}</p>
    </div>
  );
}
